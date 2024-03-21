function kw (keyword) {
  return new RegExp(keyword
    .split('')
    .map(letter => `[${letter.toLowerCase()}${letter.toUpperCase()}]`)
    .join('')
  )
}
const SCOL =token(';');
const DOT = token('.');
const OPEN_PAR = token('(');
const CLOSE_PAR = token(')');
const COMMA =     token(',');
const ASSIGN =    token('=');
const STAR =      token('*');
const PLUS =      token('+');
const MINUS =     token('-');
const TILDE =     token('~');
const PIPE2 =     token('||');
const DIV =       token('/');
const MOD =       token('%');
const LT2 =       token('<<');
const GT2 =       token('>>');
const AMP =       token('&');
const PIPE =      token('|');
const LT =        token('<');
const LT_EQ =     token('<=');
const GT =        token('>');
const GT_EQ =     token('>=');
const EQ =        token('==');
const NOT_EQ1 =   token('!=');
const NOT_EQ2 =   token('<>');

// http://www.sqlite.org/lang_keywords.html
const ABORT_ =             token(kw('ABORT'));
const ACTION_ =            token(kw('ACTION'));
const ADD_ =               token(kw('ADD'));
const AFTER_ =             token(kw('AFTER'));
const ALL_ =               token(kw('ALL'));
const ALTER_ =             token(kw('ALTER'));
const ANALYZE_ =           token(kw('ANALYZE'));
const AND_ =               token(kw('AND'));
const AS_ =                token(kw('AS'));
const ASC_ =               token(kw('ASC'));
const ATTACH_ =            token(kw('ATTACH'));
const AUTOINCREMENT_ =     token(kw('AUTOINCREMENT'));
const BEFORE_ =            token(kw('BEFORE'));
const BEGIN_ =             token(kw('BEGIN'));
const BETWEEN_ =           token(kw('BETWEEN'));
const BY_ =                token(kw('BY'));
const CASCADE_ =           token(kw('CASCADE'));
const CASE_ =              token(kw('CASE'));
const CAST_ =              token(kw('CAST'));
const CHECK_ =             token(kw('CHECK'));
const COLLATE_ =           token(kw('COLLATE'));
const COLUMN_ =            token(kw('COLUMN'));
const COMMIT_ =            token(kw('COMMIT'));
const CONFLICT_ =          token(kw('CONFLICT'));
const CONSTRAINT_ =        token(kw('CONSTRAINT'));
const CREATE_ =            token(kw('CREATE'));
const CROSS_ =             token(kw('CROSS'));
const CURRENT_DATE_ =      token(kw('CURRENT_DATE'));
const CURRENT_TIME_ =      token(kw('CURRENT_TIME'));
const CURRENT_TIMESTAMP_ = token(kw('CURRENT_TIMESTAMP'));
const DATABASE_ =          token(kw('DATABASE'));
const DEFAULT_ =           token(kw('DEFAULT'));
const DEFERRABLE_ =        token(kw('DEFERRABLE'));
const DEFERRED_ =          token(kw('DEFERRED'));
const DELETE_ =            token(kw('DELETE'));
const DESC_ =              token(kw('DESC'));
const DETACH_ =            token(kw('DETACH'));
const DISTINCT_ =          token(kw('DISTINCT'));
const DROP_ =              token(kw('DROP'));
const EACH_ =              token(kw('EACH'));
const ELSE_ =              token(kw('ELSE'));
const END_ =               token(kw('END'));
const ESCAPE_ =            token(kw('ESCAPE'));
const EXCEPT_ =            token(kw('EXCEPT'));
const EXCLUSIVE_ =         token(kw('EXCLUSIVE'));
const EXISTS_ =            token(kw('EXISTS'));
const EXPLAIN_ =           token(kw('EXPLAIN'));
const FAIL_ =              token(kw('FAIL'));
const FOR_ =               token(kw('FOR'));
const FOREIGN_ =           token(kw('FOREIGN'));
const FROM_ =              token(kw('FROM'));
const FULL_ =              token(kw('FULL'));
const GLOB_ =              token(kw('GLOB'));
const GROUP_ =             token(kw('GROUP'));
const HAVING_ =            token(kw('HAVING'));
const IF_ =                token(kw('IF'));
const IGNORE_ =            token(kw('IGNORE'));
const IMMEDIATE_ =         token(kw('IMMEDIATE'));
const IN_ =                token(kw('IN'));
const INDEX_ =             token(kw('INDEX'));
const INDEXED_ =           token(kw('INDEXED'));
const INITIALLY_ =         token(kw('INITIALLY'));
const INNER_ =             token(kw('INNER'));
const INSERT_ =            token(kw('INSERT'));
const INSTEAD_ =           token(kw('INSTEAD'));
const INTERSECT_ =         token(kw('INTERSECT'));
const INTO_ =              token(kw('INTO'));
const IS_ =                token(kw('IS'));
const ISNULL_ =            token(kw('ISNULL'));
const JOIN_ =              token(kw('JOIN'));
const KEY_ =               token(kw('KEY'));
const LEFT_ =              token(kw('LEFT'));
const LIKE_ =              token(kw('LIKE'));
const LIMIT_ =             token(kw('LIMIT'));
const MATCH_ =             token(kw('MATCH'));
const NATURAL_ =           token(kw('NATURAL'));
const NO_ =                token(kw('NO'));
const NOT_ =               token(kw('NOT'));
const NOTNULL_ =           token(kw('NOTNULL'));
const NULL_ =              token(kw('NULL'));
const OF_ =                token(kw('OF'));
const OFFSET_ =            token(kw('OFFSET'));
const ON_ =                token(kw('ON'));
const OR_ =                token(kw('OR'));
const ORDER_ =             token(kw('ORDER'));
const OUTER_ =             token(kw('OUTER'));
const PLAN_ =              token(kw('PLAN'));
const PRAGMA_ =            token(kw('PRAGMA'));
const PRIMARY_ =           token(kw('PRIMARY'));
const QUERY_ =             token(kw('QUERY'));
const RAISE_ =             token(kw('RAISE'));
const RECURSIVE_ =         token(kw('RECURSIVE'));
const REFERENCES_ =        token(kw('REFERENCES'));
const REGEXP_ =            token(kw('REGEXP'));
const REINDEX_ =           token(kw('REINDEX'));
const RELEASE_ =           token(kw('RELEASE'));
const RENAME_ =            token(kw('RENAME'));
const REPLACE_ =           token(kw('REPLACE'));
const RESTRICT_ =          token(kw('RESTRICT'));
const RETURNING_ =         token(kw('RETURNING'));
const RIGHT_ =             token(kw('RIGHT'));
const ROLLBACK_ =          token(kw('ROLLBACK'));
const ROW_ =               token(kw('ROW'));
const ROWS_ =              token(kw('ROWS'));
const SAVEPOINT_ =         token(kw('SAVEPOINT'));
const SELECT_ =            token(kw('SELECT'));
const SET_ =               token(kw('SET'));
const TABLE_ =             token(kw('TABLE'));
const TEMP_ =              token(kw('TEMP'));
const TEMPORARY_ =         token(kw('TEMPORARY'));
const THEN_ =              token(kw('THEN'));
const TO_ =                token(kw('TO'));
const TRANSACTION_ =       token(kw('TRANSACTION'));
const TRIGGER_ =           token(kw('TRIGGER'));
const UNION_ =             token(kw('UNION'));
const UNIQUE_ =            token(kw('UNIQUE'));
const UPDATE_ =            token(kw('UPDATE'));
const USING_ =             token(kw('USING'));
const VACUUM_ =            token(kw('VACUUM'));
const VALUES_ =            token(kw('VALUES'));
const VIEW_ =              token(kw('VIEW'));
const VIRTUAL_ =           token(kw('VIRTUAL'));
const WHEN_ =              token(kw('WHEN'));
const WHERE_ =             token(kw('WHERE'));
const WITH_ =              token(kw('WITH'));
const WITHOUT_ =           token(kw('WITHOUT'));
const FIRST_VALUE_ =       token(kw('FIRST_VALUE'));
const OVER_ =              token(kw('OVER'));
const PARTITION_ =         token(kw('PARTITION'));
const RANGE_ =             token(kw('RANGE'));
const PRECEDING_ =         token(kw('PRECEDING'));
const UNBOUNDED_ =         token(kw('UNBOUNDED'));
const CURRENT_ =           token(kw('CURRENT'));
const FOLLOWING_ =         token(kw('FOLLOWING'));
const CUME_DIST_ =         token(kw('CUME_DIST'));
const DENSE_RANK_ =        token(kw('DENSE_RANK'));
const LAG_ =               token(kw('LAG'));
const LAST_VALUE_ =        token(kw('LAST_VALUE'));
const LEAD_ =              token(kw('LEAD'));
const NTH_VALUE_ =         token(kw('NTH_VALUE'));
const NTILE_ =             token(kw('NTILE'));
const PERCENT_RANK_ =      token(kw('PERCENT_RANK'));
const RANK_ =              token(kw('RANK'));
const ROW_NUMBER_ =        token(kw('ROW_NUMBER'));
const GENERATED_ =         token(kw('GENERATED'));
const ALWAYS_ =            token(kw('ALWAYS'));
const STORED_ =            token(kw('STORED'));
const TRUE_ =              token(kw('TRUE'));
const FALSE_ =             token(kw('FALSE'));
const WINDOW_ =            token(kw('WINDOW'));
const NULLS_ =             token(kw('NULLS'));
const FIRST_ =             token(kw('FIRST'));
const LAST_ =              token(kw('LAST'));
const FILTER_ =            token(kw('FILTER'));
const GROUPS_ =            token(kw('GROUPS'));
const EXCLUDE_ =           token(kw('EXCLUDE'));
const TIES_ =              token(kw('TIES'));
const OTHERS_ =            token(kw('OTHERS'));
const DO_ =                token(kw('DO'));
const NOTHING_ =           token(kw('NOTHING'));


// const IDENTIFIER = /[a-z]/;
// IDENTIFIER:
//     '"' (~'"' | '""')* '"'
//     | '`' (~'`' | '``')* '`'
//     | '[' ~']'* ']'
//     | [A-Z_] [A-Z_0-9]*
// ; // TODO check: needs more chars in set
const HEX_DIGIT = /[0-9A-F]/;
const DIGIT = /[0-9]/;
// ((DIGIT+ ('.' DIGIT*)?) | ('.' DIGIT+)) ('E' [-+]? DIGIT+)? | '0x' HEX_DIGIT+;
const NUMERIC_LITERAL = choice(
    seq(repeat1(DIGIT), optional(seq('.', DIGIT))),
    seq('.', repeat1(DIGIT), optional(seq(kw('E'), optional(choice('-', '+')), repeat1(DIGIT)))),
    seq('0x', repeat1(HEX_DIGIT)),
);

const STRING_LITERAL = /\'([^']|'')*'/;

const BLOB_LITERAL = seq('X', STRING_LITERAL);

// SINGLE_LINE_COMMENT: '--' ~[\r\n]* (('\r'? '\n') | EOF) -> channel(HIDDEN);

// MULTILINE_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);
const QUOTED_IDENTIFIER = token(seq('"', repeat(choice(/[^"]/, /""/)), '`'));
const BACKQUOTED_IDENTIFIER = token(seq('`', repeat(choice(/[^`]/, /``/)), '`'));
const BRACKETED_IDENTIFIER = /\[[^\]]*\]/;


module.exports = grammar({
  name: 'sqlite',

  externals: $ => [
      $.identifier
  ],

  conflicts: $ => [
    [$.analyze_stmt],
    [$.expr],
    [$.delete_stmt_limited, $.delete_stmt],
    [$.table_or_subquery],
    [$.update_stmt, $.update_stmt_limited],
  ],

  word: $ => $.identifier,

  rules: {
    sql_stmt_list: $ => seq(repeat(SCOL), $.sql_stmt, repeat(seq(repeat1(SCOL), $.sql_stmt)), repeat(SCOL)),

    sql_stmt: $ => seq(optional(seq(EXPLAIN_, optional(seq(QUERY_, PLAN_)))), choice(
        $.alter_table_stmt,
        $.analyze_stmt,
        $.attach_stmt,
        $.begin_stmt,
        $.commit_stmt,
        $.create_index_stmt,
        $.create_table_stmt,
        $.create_trigger_stmt,
        $.create_view_stmt,
        $.create_virtual_table_stmt,
        $.delete_stmt,
        $.delete_stmt_limited,
        $.detach_stmt,
        $.drop_stmt,
        $.insert_stmt,
        $.pragma_stmt,
        $.reindex_stmt,
        $.release_stmt,
        $.rollback_stmt,
        $.savepoint_stmt,
        $.select_stmt,
        $.update_stmt,
        $.update_stmt_limited,
        $.vacuum_stmt,
     )),

    alter_table_stmt: $ => seq(ALTER_, TABLE_, optional(seq(field('schema_name', $.any_name), DOT)), $.any_name,
        choice(
            seq(RENAME_, choice(seq(TO_, field('new_table_name', $.any_name)), seq(optional(COLUMN_), field('old_column_name', $.any_name), TO_, field('new_column_name', $.any_name)))),
            seq(ADD_, optional(COLUMN_), $.column_def),
            seq(DROP_, optional(COLUMN_), $.any_name),
        )
    ),

    analyze_stmt: $ => seq(ANALYZE_, optional(choice($.any_name, seq(optional(seq($.any_name, DOT)), field('table_or_index_name', $.any_name))))),
    attach_stmt: $ => seq(ATTACH_, optional(DATABASE_), $.expr, AS_, $.any_name),
    begin_stmt: $ => seq(BEGIN_, optional(choice(DEFERRED_, IMMEDIATE_, EXCLUSIVE_)), optional(seq(TRANSACTION_, optional($.any_name)))),
    commit_stmt: _$ => seq(choice(COMMIT_, END_), optional(TRANSACTION_)),
    rollback_stmt: $ => seq(ROLLBACK_, optional(TRANSACTION_), optional(seq(TO_, optional(SAVEPOINT_), $.any_name))),
    savepoint_stmt: $ => seq(SAVEPOINT_, $.any_name),
    release_stmt: $ => seq(RELEASE_, optional(SAVEPOINT_), $.any_name),
    create_index_stmt: $ => seq(
        CREATE_,
        optional(UNIQUE_),
        INDEX_,
        optional(seq(IF_, NOT_, EXISTS_)),
        optional(seq($.any_name, DOT)),
        $.any_name,
        ON_,
        field('table_name', $.any_name),
        OPEN_PAR, $.indexed_column, repeat(seq(COMMA, $.indexed_column)), CLOSE_PAR, optional(seq(WHERE_, $.expr))
    ),
    indexed_column: $ => seq(choice($.any_name, $.expr), optional(seq(COLLATE_, $.any_name)), optional($.asc_desc)),
    create_table_stmt: $ => seq(CREATE_, optional(choice(TEMP_, TEMPORARY_)), TABLE_, optional(seq(IF_, NOT_, EXISTS_)), optional(seq($.any_name, DOT)),
        field('table_name', $.any_name), choice(
            seq(OPEN_PAR, $.column_def, repeat(seq(COMMA, $.column_def)), repeat(seq(COMMA, $.table_constraint)), CLOSE_PAR, optional(seq(WITHOUT_, field('row_ROW_ID', $.identifier)))),
            seq(AS_, $.select_stmt)
        )
    ),
    column_def: $ => seq($.any_name, optional($.type_name), repeat($.column_constraint)),
    type_name: $ => seq(
        optional($.any_name), choice(
            seq(OPEN_PAR, $.signed_number, CLOSE_PAR),
            seq(OPEN_PAR, $.signed_number, COMMA, $.signed_number, CLOSE_PAR)
        )
    ),
    column_constraint: $ => seq(optional(seq(CONSTRAINT_, $.any_name)),
        choice(
            seq(PRIMARY_, KEY_, optional($.asc_desc), optional($.conflict_clause), optional(AUTOINCREMENT_)),
            seq(choice(seq(optional(NOT_), NULL_, UNIQUE_)), optional($.conflict_clause)),
            seq(DEFAULT_, choice($.signed_number, $.literal_value, seq(OPEN_PAR, $.expr, CLOSE_PAR))),
            seq(COLLATE_, $.any_name),
            $.foreign_key_clause,
            seq(optional(seq(GENERATED_, ALWAYS_)), AS_, OPEN_PAR, $.expr, CLOSE_PAR, optional(choice(STORED_, VIRTUAL_))),
        )
    ),
    signed_number: _$ => prec(1, seq(optional(choice(PLUS, MINUS)), NUMERIC_LITERAL)),
    table_constraint: $ => seq(optional(seq(CONSTRAINT_, $.any_name)),
        choice(
            seq(choice(seq(PRIMARY_, KEY_)), OPEN_PAR, $.indexed_column, repeat(seq(COMMA, $.indexed_column)), CLOSE_PAR, optional($.conflict_clause)),
            seq(CHECK_, OPEN_PAR, $.expr, CLOSE_PAR),
            seq(FOREIGN_, KEY_, OPEN_PAR, $.any_name, repeat(seq(COMMA, $.any_name)), CLOSE_PAR, $.foreign_key_clause)
        )
    ),
    foreign_key_clause: $ => prec.right(seq(
        REFERENCES_, $.any_name,
        optional(seq(OPEN_PAR, $.any_name, repeat(seq(COMMA, $.any_name)), CLOSE_PAR)),
        repeat(
            choice(
                seq(ON_, choice(DELETE_, UPDATE_), choice(seq(SET_, choice(NULL_, DEFAULT_)), CASCADE_, RESTRICT_, seq(NO_, ACTION_))),
                seq(MATCH_, $.any_name)
            )
        ),
        optional(seq(optional(NOT_), DEFERRABLE_, optional(seq(INITIALLY_, choice(DEFERRED_, IMMEDIATE_)))))
    )),

    conflict_clause: $ => seq(ON_, CONFLICT_, choice(ROLLBACK_, ABORT_, FAIL_, IGNORE_, REPLACE_)),
    create_trigger_stmt: $ => seq(CREATE_,
        optional(choice(TEMP_, TEMPORARY_)),
        TRIGGER_,
        optional(seq(IF_, NOT_, EXISTS_)),
        optional(seq($.any_name, DOT)),
        $.any_name,
        choice(BEFORE_, AFTER_, seq(INSTEAD_, OF_)),
        choice(DELETE_, INSERT_, seq(UPDATE_, optional(seq(OF_, $.any_name, repeat(seq(COMMA, $.any_name)))))),
        ON_, field('table_name', $.any_name), optional(seq(FOR_, EACH_, ROW_)), optional(seq(WHEN_, $.expr)), BEGIN_,
        repeat1(seq(choice($.update_stmt, $.insert_stmt, $.delete_stmt, $.select_stmt), SCOL)),
        END_
    ),

    create_view_stmt: $ => seq(CREATE_, optional(choice(TEMP_, TEMPORARY_)), VIEW_, optional(seq(IF_, NOT_, EXISTS_)), optional(seq($.any_name, DOT)),
        $.any_name, optional(seq(OPEN_PAR, $.any_name, repeat(seq(COMMA, $.any_name)), CLOSE_PAR)), AS_, $.select_stmt),

    create_virtual_table_stmt: $ => seq(CREATE_, VIRTUAL_, TABLE_, optional(seq(IF_, NOT_, EXISTS_)), optional(seq($.any_name, DOT)), $.any_name, USING_, $.any_name,
        optional(seq(OPEN_PAR, $.module_argument, repeat(seq(COMMA, $.module_argument)), CLOSE_PAR))),

    with_clause: $ => seq(WITH_, optional(RECURSIVE_), $.cte_table_name, AS_, OPEN_PAR, $.select_stmt, CLOSE_PAR,
        repeat(seq(COMMA, $.cte_table_name, AS_, OPEN_PAR, $.select_stmt, CLOSE_PAR))),

    cte_table_name: $ => prec.right(seq($.any_name, optional(seq(OPEN_PAR, $.any_name, repeat(seq(COMMA, $.any_name)), CLOSE_PAR)))),
    recursive_cte: $ => seq($.cte_table_name, AS_, OPEN_PAR, $.initial_select, UNION_, optional(ALL_), $.recursive_select, CLOSE_PAR),
    common_table_expression: $ => seq($.any_name, optional(seq(OPEN_PAR, $.any_name, repeat(seq(COMMA, $.any_name)), CLOSE_PAR)), AS_, OPEN_PAR, $.select_stmt, CLOSE_PAR),
    delete_stmt: $ => seq(optional($.with_clause), DELETE_, FROM_, $.qualified_table_name, optional(seq(WHERE_, $.expr)), optional($.returning_clause)),
    delete_stmt_limited: $ => seq(optional($.with_clause), DELETE_, FROM_, $.qualified_table_name, optional(seq(WHERE_, $.expr)), optional($.returning_clause),
        optional(seq(optional($.order_by_stmt), $.limit_stmt)),
    ),
    detach_stmt: $ => seq(DETACH_, optional(DATABASE_), $.any_name),
    drop_stmt: $ => seq(DROP_, field('object', choice(INDEX_, TABLE_, TRIGGER_, VIEW_)), optional(seq(IF_, EXISTS_)), optional(seq($.any_name, DOT)), $.any_name),
    BIND_PARAMETER: $ => choice(
        seq('?', repeat(DIGIT)),
        seq(choice(':', '@', '$'), $.identifier),
    ),
    /*
     SQLite understands the following binary operators, in order from highest to lowest precedence:
        ||
        * / %
        + -
        << >> & |
        < <= > >=
        = == != <> IS IS NOT IN LIKE GLOB MATCH REGEXP
        AND
        OR
     */
    expr: $ => prec.left(5, choice(
        $.literal_value,
        $.BIND_PARAMETER,
        seq(optional(seq(optional(seq($.any_name, DOT)), $.any_name, DOT)), $.any_name),
        seq($.unary_operator, $.expr),
        seq($.expr, PIPE2, $.expr),
        seq($.expr, choice(STAR, DIV, MOD), $.expr),
        seq($.expr, choice(PLUS, MINUS), $.expr),
        seq($.expr, choice(LT2, GT2, AMP, PIPE), $.expr),
        seq($.expr, choice(LT, LT_EQ, GT, GT_EQ), $.expr),
        seq($.expr, choice(ASSIGN, EQ, NOT_EQ1, NOT_EQ2, IS_, seq(IS_, NOT_), IN_, LIKE_, GLOB_, MATCH_, REGEXP_), $.expr),
        seq($.expr, AND_, $.expr),
        seq($.expr, OR_, $.expr),
        seq($.any_name, OPEN_PAR, optional(choice(seq(optional(DISTINCT_), $.expr, repeat(seq(COMMA, $.expr))), STAR)), CLOSE_PAR, optional($.filter_clause), optional($.over_clause)),
        seq(OPEN_PAR, $.expr, repeat(seq(COMMA, $.expr)), CLOSE_PAR),
        seq(CAST_, OPEN_PAR, $.expr, AS_, $.type_name, CLOSE_PAR),
        seq($.expr, COLLATE_, $.any_name),
        seq($.expr, optional(NOT_), choice(LIKE_, GLOB_, REGEXP_, MATCH_), $.expr, optional(seq(ESCAPE_, $.expr))),
        seq($.expr, choice(ISNULL_, NOTNULL_, seq(NOT_, NULL_))),
        seq($.expr, IS_, optional(NOT_), $.expr),
        seq($.expr, optional(NOT_), BETWEEN_, $.expr, AND_, $.expr),
        seq($.expr, optional(NOT_), IN_,
            choice(
                seq(OPEN_PAR, optional(choice($.select_stmt, seq($.expr, optional(repeat(seq(COMMA, $.expr)))))), CLOSE_PAR),
                seq(optional(seq($.any_name, DOT)), $.any_name),
                seq(optional(seq($.any_name, DOT)), $.any_name, OPEN_PAR, optional(seq($.expr, repeat(seq(COMMA, $.expr)))), CLOSE_PAR),
            ),
        ),
        seq(optional(seq(optional(NOT_), EXISTS_)), OPEN_PAR, $.select_stmt, CLOSE_PAR),
        seq(CASE_, optional($.expr), repeat1(seq(WHEN_, $.expr, THEN_, $.expr)), optional(seq(ELSE_, $.expr)), END_),
        $.raise_function
    )),
    raise_function: $ => seq(RAISE_, OPEN_PAR, choice(IGNORE_, seq(choice(ROLLBACK_, ABORT_, FAIL_), COMMA, $.error_message)), CLOSE_PAR),
    literal_value: _$ => choice(NUMERIC_LITERAL, STRING_LITERAL, BLOB_LITERAL, NULL_, TRUE_, FALSE_, CURRENT_TIME_, CURRENT_DATE_, CURRENT_TIMESTAMP_),
    value_row: $ => seq(OPEN_PAR, $.expr, repeat(seq(COMMA, $.expr)), CLOSE_PAR),
    values_clause: $ => seq(VALUES_, $.value_row, repeat(seq(COMMA, $.value_row))),
    insert_stmt: $ => seq(
        optional($.with_clause),
        choice(INSERT_, REPLACE_, seq(INSERT_, OR_, choice(REPLACE_, ROLLBACK_, ABORT_, FAIL_, IGNORE_))),
        INTO_,
            optional(seq($.any_name, DOT)),
            $.any_name,
            optional(seq(AS_, $.any_name)),
            optional(seq(OPEN_PAR, $.any_name, repeat(seq(COMMA, $.any_name)), CLOSE_PAR)),
            choice(
                seq(choice($.values_clause, $.select_stmt), optional($.upsert_clause)),
                seq(DEFAULT_, VALUES_),
            ),
        optional($.returning_clause),
    ),
    returning_clause: $ => seq(RETURNING_, $.result_column, repeat(seq(COMMA, $.result_column))),
    upsert_clause: $ => seq(ON_, CONFLICT_, optional(seq(OPEN_PAR, $.indexed_column, repeat(seq(COMMA, $.indexed_column)), CLOSE_PAR, optional(seq(WHERE_, $.expr)))),
        DO_, choice(NOTHING_, seq(UPDATE_, SET_, choice($.any_name, $.any_name),
            ASSIGN, $.expr, repeat(seq(COMMA, choice($.any_name, $.any_name), ASSIGN, $.expr)), optional(seq(WHERE_, $.expr))))),

    pragma_stmt: $ => seq(PRAGMA_, optional(seq($.any_name, DOT)), $.any_name, choice(seq(ASSIGN, $.pragma_value), seq(OPEN_PAR, $.pragma_value, CLOSE_PAR))),
    pragma_value: $ => choice($.signed_number, $.any_name, STRING_LITERAL),
    reindex_stmt: $ => seq(REINDEX_, optional(choice($.any_name, seq($.any_name, DOT))), optional(choice($.any_name, $.any_name))),
    select_stmt: $ => seq(optional($.common_table_stmt), $.select_core, repeat(seq($.compound_operator, $.select_core)), optional($.order_by_stmt), optional($.limit_stmt)),
    join_clause: $ => prec(2, seq($.table_or_subquery, repeat(seq($.join_operator, $.table_or_subquery, optional($.join_constraint))))),
    select_core: $ => prec(1, choice(
          seq(
            SELECT_, optional(choice(DISTINCT_, ALL_)), $.result_column, repeat(seq(COMMA, $.result_column)),
            optional(seq(FROM_, choice(seq($.table_or_subquery, repeat(seq(COMMA, $.table_or_subquery))), $.join_clause))),
            optional(seq(WHERE_, field('whereExpr', $.expr))),
            optional(seq(GROUP_, BY_, field('groupByExpr', $.expr), repeat(seq(COMMA, field('groupByExpr', $.expr))), optional(seq(HAVING_, field('havingExpr', $.expr))))),
            optional(seq(WINDOW_, $.any_name, AS_, $.window_defn, repeat(seq(COMMA, $.any_name, AS_, $.window_defn)))),
          ),
          $.values_clause
    )),
    factored_select_stmt: $ => $.select_stmt,
    simple_select_stmt: $ => seq(optional($.common_table_stmt), $.select_core, optional($.order_by_stmt), optional($.limit_stmt)),
    compound_select_stmt: $ => seq(optional($.common_table_stmt), $.select_core, repeat1(seq(choice(seq(UNION_, optional(ALL_)), INTERSECT_, EXCEPT_), $.select_core)), optional($.order_by_stmt), optional($.limit_stmt)),
    table_or_subquery: $ => choice(
        seq(optional(seq($.any_name, DOT)), $.any_name, optional(seq(optional(AS_), $.any_name)), optional(choice(seq(INDEXED_, BY_, $.any_name), seq(NOT_, INDEXED_)))),
        seq(optional(seq($.any_name, DOT)), $.any_name, OPEN_PAR, $.expr, repeat(seq(COMMA, $.expr)), CLOSE_PAR, optional(seq(optional(AS_), $.any_name))),
        seq(OPEN_PAR, choice(seq($.table_or_subquery, repeat(seq(COMMA, $.table_or_subquery))), $.join_clause), CLOSE_PAR),
        seq(OPEN_PAR, $.select_stmt, CLOSE_PAR, optional(seq(optional(AS_), $.any_name))),
    ),
    result_column: $ => choice(STAR, seq($.any_name, DOT, STAR), seq($.expr, optional(seq(optional(AS_), $.column_alias)))),
    join_operator: _$ => prec(2, choice(COMMA, seq(optional(NATURAL_), optional(choice(seq(LEFT_, optional(OUTER_)), INNER_, CROSS_)), JOIN_))),
    join_constraint: $ => choice(seq(ON_, $.expr), seq(USING_, OPEN_PAR, $.any_name, repeat(seq(COMMA, $.any_name)), CLOSE_PAR)),
    compound_operator: _$ => choice(seq(UNION_, optional(ALL_)), INTERSECT_, EXCEPT_),
    update_stmt: $ => seq(
        optional($.with_clause),
        UPDATE_,
        optional(seq(OR_, choice(ROLLBACK_, ABORT_, REPLACE_, FAIL_, IGNORE_))),
        $.qualified_table_name,
        SET_,
        choice($.any_name, $.any_name),
        ASSIGN,
        $.expr,
        repeat(seq(COMMA, choice($.any_name, $.any_name), ASSIGN, $.expr)),
        optional(seq(FROM_, choice(seq($.table_or_subquery, repeat(seq(COMMA, $.table_or_subquery))), $.join_clause))),
        optional(seq(WHERE_, $.expr)),
        optional($.returning_clause)
    ),
    column_name_list: $ => seq(OPEN_PAR, $.any_name, repeat(seq(COMMA, $.any_name)), CLOSE_PAR),
    update_stmt_limited: $ => seq(
        optional($.with_clause),
        UPDATE_,
        optional(seq(OR_, choice(ROLLBACK_, ABORT_, REPLACE_, FAIL_, IGNORE_))),
        $.qualified_table_name,
        SET_,
        choice($.any_name, $.any_name),
        ASSIGN,
        $.expr,
        repeat(seq(COMMA, choice($.any_name, $.any_name), ASSIGN, $.expr)),
        optional(seq(WHERE_, $.expr)),
        optional($.returning_clause),
        optional(seq(optional($.order_by_stmt), optional($.limit_stmt))),
    ),
    qualified_table_name: $ => seq(optional(seq($.any_name, DOT)), $.any_name, optional(seq(AS_, $.any_name)), optional(choice(seq(INDEXED_, BY_, $.any_name), seq(NOT_, INDEXED_)))),
    vacuum_stmt: $ => seq(VACUUM_, optional($.any_name), optional(seq(INTO_, $.any_name))),
    filter_clause: $ => seq(FILTER_, OPEN_PAR, WHERE_, $.expr, CLOSE_PAR),
    window_defn: $ => seq(OPEN_PAR, optional($.any_name), optional(seq(PARTITION_, BY_, $.expr, repeat(seq(COMMA, $.expr)))), ORDER_, BY_, $.ordering_term, repeat(seq(COMMA, $.ordering_term)), optional($.frame_spec), CLOSE_PAR),
    over_clause: $ => seq(OVER_,
        choice(
            $.any_name,
            seq(OPEN_PAR, optional($.any_name), optional(seq(PARTITION_, BY_, $.expr, repeat(seq(COMMA, $.expr)))), optional(seq(ORDER_, BY_, $.ordering_term, repeat(seq(COMMA, $.ordering_term)))), optional($.frame_spec), CLOSE_PAR),
        )
    ),
    frame_spec: $ => seq($.frame_clause, optional(choice(seq(NO_, OTHERS_), seq(CURRENT_, ROW_), GROUP_, TIES_))),
    frame_clause: $ => seq(choice(RANGE_, ROWS_, GROUPS_), choice($.frame_single, seq(BETWEEN_, $.frame_left, AND_, $.frame_right))),
    simple_function_invocation: $ => seq($.any_name, OPEN_PAR, choice(seq($.expr, repeat(seq(COMMA, $.expr))), STAR), CLOSE_PAR),
    aggregate_function_invocation: $ => seq($.any_name, OPEN_PAR, optional(seq(optional(DISTINCT_), choice(seq($.expr, repeat(seq(COMMA, $.expr))), STAR))), CLOSE_PAR, optional($.filter_clause)),
    window_function_invocation: $ => seq($.window_function, OPEN_PAR, optional(choice(seq($.expr, repeat(seq(COMMA, $.expr))), STAR)), CLOSE_PAR, optional($.filter_clause), OVER_, choice($.window_defn, $.any_name)),
    common_table_stmt: $ => seq(WITH_, optional(RECURSIVE_), $.common_table_expression, repeat(seq(COMMA, $.common_table_expression))),
    order_by_stmt: $ => seq(ORDER_, BY_, $.ordering_term, repeat(seq(COMMA, $.ordering_term))),
    limit_stmt: $ => seq(LIMIT_, $.expr, optional(seq(choice(OFFSET_, COMMA), $.expr))),
    ordering_term: $ => seq($.expr, optional(seq(COLLATE_, $.any_name)), optional($.asc_desc), optional(seq(NULLS_, choice(FIRST_, LAST_)))),
    asc_desc: _$ => choice(ASC_, DESC_),
    frame_left: $ => choice(seq($.expr, PRECEDING_), seq(CURRENT_, ROW_), seq(UNBOUNDED_, PRECEDING_)),
    frame_right: $ => choice(seq($.expr, PRECEDING_), seq($.expr, FOLLOWING_), seq(CURRENT_, ROW_), seq(UNBOUNDED_, FOLLOWING_)),
    frame_single: $ => choice(seq($.expr, PRECEDING_), seq(UNBOUNDED_, PRECEDING_), seq(CURRENT_, ROW_)),
    window_function: $ => choice(
        seq(choice(FIRST_VALUE_, LAST_VALUE_), OPEN_PAR, $.expr, CLOSE_PAR, OVER_, OPEN_PAR, optional($.partition_by), $.order_by_expr_asc_desc, optional($.frame_clause), CLOSE_PAR),
        seq(choice(CUME_DIST_, PERCENT_RANK_), OPEN_PAR, CLOSE_PAR, OVER_, OPEN_PAR, optional($.partition_by), optional($.order_by_expr), CLOSE_PAR),
        seq(choice(DENSE_RANK_, RANK_, ROW_NUMBER_), OPEN_PAR, CLOSE_PAR, OVER_, OPEN_PAR, optional($.partition_by), $.order_by_expr_asc_desc, CLOSE_PAR),
        seq(choice(LAG_, LEAD_), OPEN_PAR, $.expr, optional($.offset), optional($.default_value), CLOSE_PAR, OVER_, OPEN_PAR, optional($.partition_by), $.order_by_expr_asc_desc, CLOSE_PAR),
        seq(NTH_VALUE_, OPEN_PAR, $.expr, COMMA, $.signed_number, CLOSE_PAR, OVER_, OPEN_PAR, optional($.partition_by), $.order_by_expr_asc_desc, optional($.frame_clause), CLOSE_PAR),
        seq(NTILE_, OPEN_PAR, $.expr, CLOSE_PAR, OVER_, OPEN_PAR, optional($.partition_by), $.order_by_expr_asc_desc, CLOSE_PAR),
    ),

    offset: $ => seq(COMMA, $.signed_number),
    default_value: $ => seq(COMMA, $.signed_number),
    partition_by: $ => seq(PARTITION_, BY_, repeat1($.expr)),
    order_by_expr: $ => seq(ORDER_, BY_, repeat1($.expr)),
    order_by_expr_asc_desc: $ => seq(ORDER_, BY_, $.expr_asc_desc),
    expr_asc_desc: $ => seq($.expr, optional($.asc_desc), repeat(seq(COMMA, $.expr, optional($.asc_desc)))),
    initial_select: $ => $.select_stmt,
    recursive_select: $ => $.select_stmt,
    unary_operator: _$ => prec(4, choice(MINUS, PLUS, TILDE, NOT_)),
    error_message: $ => STRING_LITERAL,
    module_argument: $ => choice($.expr, $.column_def),
    column_alias: $ => choice($.identifier, STRING_LITERAL),
    keyword: _$ => prec.left(2, choice(
        ABORT_, ACTION_, ADD_, AFTER_, ALL_, ALTER_, ANALYZE_, AND_, AS_, ASC_, ATTACH_, AUTOINCREMENT_, BEFORE_, BEGIN_, BETWEEN_, BY_,
        CASCADE_, CASE_, CAST_, CHECK_, COLLATE_, COLUMN_, COMMIT_, CONFLICT_, CONSTRAINT_, CREATE_, CROSS_, CURRENT_DATE_, CURRENT_TIME_, CURRENT_TIMESTAMP_,
        DATABASE_, DEFAULT_, DEFERRABLE_, DEFERRED_, DELETE_, DESC_, DETACH_, DISTINCT_, DROP_, EACH_, ELSE_, END_, ESCAPE_, EXCEPT_, EXCLUSIVE_, EXISTS_, EXPLAIN_, FAIL_,
        FOR_, FOREIGN_, FROM_, FULL_, GLOB_, GROUP_, HAVING_, IF_, IGNORE_, IMMEDIATE_, IN_, INDEX_, INDEXED_, INITIALLY_, INNER_, INSERT_, INSTEAD_, INTERSECT_,
        INTO_, IS_, ISNULL_, JOIN_, KEY_, LEFT_, LIKE_, LIMIT_, MATCH_, NATURAL_, NO_, NOT_, NOTNULL_, NULL_, OF_, OFFSET_, ON_, OR_, ORDER_,
        OUTER_, PLAN_, PRAGMA_, PRIMARY_, QUERY_, RAISE_, RECURSIVE_, REFERENCES_, REGEXP_, REINDEX_, RELEASE_, RENAME_, REPLACE_, RESTRICT_, RIGHT_, ROLLBACK_, ROW_,
        ROWS_, SAVEPOINT_, SELECT_, SET_, TABLE_, TEMP_, TEMPORARY_, THEN_, TO_, TRANSACTION_, TRIGGER_, UNION_, UNIQUE_, UPDATE_, USING_, VACUUM_, VALUES_, VIEW_,
        VIRTUAL_, WHEN_, WHERE_, WITH_, WITHOUT_, FIRST_VALUE_, OVER_, PARTITION_, RANGE_, PRECEDING_, UNBOUNDED_, CURRENT_, FOLLOWING_, CUME_DIST_, DENSE_RANK_, LAG_,
        LAST_VALUE_, LEAD_, NTH_VALUE_, NTILE_, PERCENT_RANK_, RANK_, ROW_NUMBER_, GENERATED_, ALWAYS_, STORED_, TRUE_, FALSE_, WINDOW_, NULLS_, FIRST_, LAST_, FILTER_,
        GROUPS_, EXCLUDE_,
    )),
    any_name:$ => prec(1, choice(
        $.identifier,
        $.keyword,
        STRING_LITERAL,
        seq(OPEN_PAR, $.any_name, CLOSE_PAR)
    )),

    comment: _$ => token(
        choice(
            seq("--", /.*/),
            seq("/*", /[^*]*\*+([^/*][^*]*\*+)*/, "/")
        )
    ),
  }
});
