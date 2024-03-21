## What is this?
This is a sqlite grammar for tree-sitter. It is untested. 

## How it works
All of the logic is inside the grammar.js file, however, it is using a scanner.c (external scanner) because SQL keywords can be prefixes of valid identifiers and I don't know how to reconcile those.

### TODO: 
Port over existing sqlite unit tests into tree-sitter.
