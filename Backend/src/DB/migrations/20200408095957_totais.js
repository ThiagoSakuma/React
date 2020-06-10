exports.up = function(knex) {
    return knex.schema.createTable('totais', function(table) {
        table.increments();
        table.decimal('total_proventos').notNullable();
        table.decimal('total_desconto').notNullable();
        table.decimal('total_liquido').notNullable();

        table.string('usuarios_id').notNullable();

        table.foreign('usuarios_id').references('id').inTable('usuarios');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('totais');
  };