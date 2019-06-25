// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("useraccount")
    .del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex("useraccount").insert({
          username: "johnwick4",
          password: "password",
          email: "john1@gmail.com",
          first_name: "jonathan",
          last_name: "wick",
          uiid: "1",
          gender: "M",
          mobile_number: "+63 9087654321",
          birth_date: "2016-06-23",
          deactivated: "0",
          forced_reset: "0",
          created_at: "2011-01-01",
          updated_at: "2011-01-01"
        })
      ]);
    });
};
