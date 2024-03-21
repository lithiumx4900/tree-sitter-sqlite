#include <assert.h>
#include <ctype.h>
#include <stdint.h>
#include <string.h>
#include <tree_sitter/parser.h>
#include <wctype.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

#define VEC_RESIZE(vec, _cap) \
  void* tmp = realloc((vec).data, (_cap) * sizeof((vec).data[0]));\
  assert(tmp != NULL); \
  (vec).data = tmp; \
  assert((vec).data != NULL); \
  (vec).cap = (_cap);

#define VEC_PUSH(vec, el) \
  if ((vec).camp == (vec).len) { \
    VEC_RESIZE((vec), MAX(16, (vec).len * 2)); \
  } \
  (vec).data[(vec).len++] = (el);

#define VEC_POP(vec) \
   { \
    STRING_FREE(VEC_BACK((vec)).word); \
    (vec).len--; \
   }

#define VEC_BACK(vec) ((vec).data[(vec).len - 1])

#define VEC_FREE(vec) \
{ \
    if ((vec).data != NULL) \
        free((vec).data); \
}

#define VEC_CLEAR(vec) \
{ \
    for (uint32_t i = 0; i < (vec).len; i++) { \
        STRING_FREE((vec).data[i].word); \
    } \
    (vec).len = 0; \
}

#define STRING_RESIZE(vec, _cap) \
  void* tmp = realloc((vec).data, (_cap + 1) * sizeof((vec).data[0])); \
  assert(tmp != NULL); \
  (vec).data = tmp; \
  memset( \
        (vec).data + (vec).len, \
        0, \
        ((_cap + 1) - (vec).len) * sizeof((vec).data[0])); \
    (vec).cap = (_cap);

#define STRING_GROW(vec, _cap) \
    if ((vec).cap < (_cap)) { \
        STRING_RESIZE((vec), (_cap)); \
    }

#define STRING_PUSH(vec, el) \
   if ((vec).cap == (vec).len) { \
        STRING_RESIZE((vec), MAX(16, (vec).len * 2)); \
   } \
  (vec).data[(vec).len++] = (el);

#define STRING_FREE(vec) \
{ \
    if ((vec).data != NULL) \
        free((vec).data); \
}

typedef struct {
    uint32_t len;
    uint32_t cap;
    char* data;
} String;

static String string_new() { return (String){.cap = 16, .len = 0, .data = calloc(1, sizeof(char) * 17)}; }

enum TokenType { identifier };

const int reservedKeywordLength = 160;
const char* const reservedKeywords[] = {
"ABORT",
"ACTION",
"ADD",
"AFTER",
"ALL",
"ALTER",
"ANALYZE",
"AND",
"AS",
"ASC",
"ATTACH",
"AUTOINCREMENT",
"BEFORE",
"BEGIN",
"BETWEEN",
"BY",
"CASCADE",
"CASE",
"CAST",
"CHECK",
"COLLATE",
"COLUMN",
"COMMIT",
"CONFLICT",
"CONSTRAINT",
"CREATE",
"CROSS",
"CURRENT_DATE",
"CURRENT_TIME",
"CURRENT_TIMESTAMP",
"DATABASE",
"DEFAULT",
"DEFERRABLE",
"DEFERRED",
"DELETE",
"DESC",
"DETACH",
"DISTINCT",
"DROP",
"EACH",
"ELSE",
"END",
"ESCAPE",
"EXCEPT",
"EXCLUSIVE",
"EXISTS",
"EXPLAIN",
"FAIL",
"FOR",
"FOREIGN",
"FROM",
"FULL",
"GLOB",
"GROUP",
"HAVING",
"IF",
"IGNORE",
"IMMEDIATE",
"IN",
"INDEX",
"INDEXED",
"INITIALLY",
"INNER",
"INSERT",
"INSTEAD",
"INTERSECT",
"INTO",
"IS",
"ISNULL",
"JOIN",
"KEY",
"LEFT",
"LIKE",
"LIMIT",
"MATCH",
"NATURAL",
"NO",
"NOT",
"NOTNULL",
"NULL",
"OF",
"OFFSET",
"ON",
"OR",
"ORDER",
"OUTER",
"PLAN",
"PRAGMA",
"PRIMARY",
"QUERY",
"RAISE",
"RECURSIVE",
"REFERENCES",
"REGEXP",
"REINDEX",
"RELEASE",
"RENAME",
"REPLACE",
"RESTRICT",
"RETURNING",
"RIGHT",
"ROLLBACK",
"ROW",
"ROWS",
"SAVEPOINT",
"SELECT",
"SET",
"TABLE",
"TEMP",
"TEMPORARY",
"THEN",
"TO",
"TRANSACTION",
"TRIGGER",
"UNION",
"UNIQUE",
"UPDATE",
"USING",
"VACUUM",
"VALUES",
"VIEW",
"VIRTUAL",
"WHEN",
"WHERE",
"WITH",
"WITHOUT",
"FIRST_VALUE",
"OVER",
"PARTITION",
"RANGE",
"PRECEDING",
"UNBOUNDED",
"CURRENT",
"FOLLOWING",
"CUME_DIST",
"DENSE_RANK",
"LAG",
"LAST_VALUE",
"LEAD",
"NTH_VALUE",
"NTILE",
"PERCENT_RANK",
"RANK",
"ROW_NUMBER",
"GENERATED",
"ALWAYS",
"STORED",
"TRUE",
"FALSE",
"WINDOW",
"NULLS",
"FIRST",
"LAST",
"FILTER",
"GROUPS",
"EXCLUDE",
"TIES",
"OTHERS",
"DO",
"NOTHING"
};

void skip(TSLexer* lexer) { lexer->advance(lexer, true); }
void advance(TSLexer* lexer) { lexer->advance(lexer, false); }
unsigned serialize(char* buffer) { return 0; }
void deserialize(const char* buffer, unsigned length) {}
void burn_whitespace(TSLexer* lexer) { while (!lexer->eof(lexer) && iswspace(lexer->lookahead)) skip(lexer); }

bool scan_ident(TSLexer* lexer) {
  String ident = string_new();

  burn_whitespace(lexer);

  if (lexer->lookahead == '_' || lexer->lookahead == '$' || iswalpha(lexer->lookahead)) {
      STRING_PUSH(ident, towupper(lexer->lookahead));
      advance(lexer);
  } else {
      return false;
  }

  while (!lexer->eof(lexer) && (lexer->lookahead == '_' || lexer->lookahead == '@' || lexer->lookahead == '$' || lexer->lookahead == ':') || iswalnum(lexer->lookahead)) {
    STRING_PUSH(ident, towupper(lexer->lookahead));
    advance(lexer);
  }

  for (int i = 0; i < reservedKeywordLength; i++) {
    if (strcmp(ident.data, reservedKeywords[i]) == 0) {
      STRING_FREE(ident);
      return false;
    }
  }

  lexer->result_symbol = identifier;

  STRING_FREE(ident);
  
  return true;
}

bool tree_sitter_sqlite_external_scanner_scan( void* payload, TSLexer* lexer, const bool* valid_symbols ) { return scan_ident(lexer); }

unsigned tree_sitter_sqlite_external_scanner_serialize( void* payload, char* state ) { return 0; }
void tree_sitter_sqlite_external_scanner_deserialize( void* payload, const char* state, unsigned length) {}

void* tree_sitter_sqlite_external_scanner_create() { return NULL; }
void tree_sitter_sqlite_external_scanner_destroy(void* payload){}
