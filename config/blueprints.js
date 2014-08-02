
module.exports.blueprints = {
  actions: true,
  rest: true,
  shortcuts: true,



  // An optional mount path for all blueprint routes on a controller, including `rest`,
  // `actions`, and `shortcuts`.  This allows you to take advantage of blueprint routing,
  // even if you need to namespace your API methods.
  //
  // * (NOTE: This only applies to blueprint autoroutes, not manual routes from `sails.config.routes`)
  //
  // For example, `prefix: '/api/v2'` would make the following REST blueprint routes
  // for a FooController:
  //
  // `GET /api/v2/foo/:id?`
  // `POST /api/v2/foo`
  // `PUT /api/v2/foo/:id`
  // `DELETE /api/v2/foo/:id`
  //
  // By default, no prefix is used.
  prefix: '',



  // Whether to pluralize controller names in blueprint routes.
  //
  // (NOTE: This only applies to blueprint autoroutes, not manual routes from `sails.config.routes`)
  //
  // For example, REST blueprints for `FooController` with `pluralize` enabled:
  // GET    /foos/:id?
  // POST   /foos
  // PUT    /foos/:id?
  // DELETE /foos/:id?
  pluralize: false,



  // Whether the blueprint controllers should populate model fetches with
  // data from other models which are linked by associations

  // If you have a lot of data in one-to-many associations, leaving this on
  // may result in very heavy api calls

  populate: true

};
