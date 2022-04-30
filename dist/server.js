(() => {
	'use strict';
	var e = {
			684: function (e, r, t) {
				var o =
					(this && this.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
				Object.defineProperty(r, '__esModule', { value: !0 }), (r.app = void 0);
				const n = o(t(860)),
					i = o(t(806)),
					s = o(t(582)),
					a = o(t(455)),
					u = t(320),
					c = t(710),
					d = t(597),
					l = o(t(170));
				t(236);
				const f = t(926),
					v = t(693);
				r.app = () => {
					const e = (0, n.default)();
					return (
						p(e),
						h(e),
						y(e),
						e.use('*', v.invalidRouteMiddleware),
						e.use(f.errorHandlerMiddleware),
						e
					);
				};
				const p = (e) => {
						e.use((0, i.default)())
							.use((0, s.default)())
							.use((0, a.default)())
							.use(d.loggerMiddleware);
					},
					h = (e) => {
						e.use(u.homeRouter).use('/api/v1', c.V1Router);
					},
					y = (e) => {
						const r = (0, l.default)({ includeMethod: !0, includeUp: !0 });
						e.use(r);
					};
			},
			870: (e, r) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.apiController = void 0),
					(r.apiController = (e, r) => {
						r.json({ message: 'success', status: !0 });
					});
			},
			85: function (e, r) {
				var t =
					(this && this.__awaiter) ||
					function (e, r, t, o) {
						return new (t || (t = Promise))(function (n, i) {
							function s(e) {
								try {
									u(o.next(e));
								} catch (e) {
									i(e);
								}
							}
							function a(e) {
								try {
									u(o.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function u(e) {
								var r;
								e.done
									? n(e.value)
									: ((r = e.value),
									  r instanceof t
											? r
											: new t(function (e) {
													e(r);
											  })).then(s, a);
							}
							u((o = o.apply(e, r || [])).next());
						});
					};
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.homeController = void 0),
					(r.homeController = (e, r) =>
						t(void 0, void 0, void 0, function* () {
							r.json({ message: 'success', status: !0 });
						}));
			},
			751: (e, r) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.Database = void 0),
					(r.Database = class {});
			},
			616: (e, r, t) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.mongoDataSource = void 0);
				const o = t(250),
					n = t(672),
					i = new o.DataSource({
						type: 'mongodb',
						host: process.env.MONGODB_HOST,
						port: Number(process.env.MONGODB_PORT),
						database: process.env.MONGODB_DATABASE,
						password: process.env.MONGIDB_PASSWORD,
						entities: [n.User],
						useUnifiedTopology: !0,
						connectTimeoutMS: 3e3
					});
				r.mongoDataSource = i;
			},
			672: function (e, r, t) {
				var o =
						(this && this.__decorate) ||
						function (e, r, t, o) {
							var n,
								i = arguments.length,
								s =
									i < 3
										? r
										: null === o
										? (o = Object.getOwnPropertyDescriptor(r, t))
										: o;
							if (
								'object' == typeof Reflect &&
								'function' == typeof Reflect.decorate
							)
								s = Reflect.decorate(e, r, t, o);
							else
								for (var a = e.length - 1; a >= 0; a--)
									(n = e[a]) &&
										(s = (i < 3 ? n(s) : i > 3 ? n(r, t, s) : n(r, t)) || s);
							return i > 3 && s && Object.defineProperty(r, t, s), s;
						},
					n =
						(this && this.__metadata) ||
						function (e, r) {
							if (
								'object' == typeof Reflect &&
								'function' == typeof Reflect.metadata
							)
								return Reflect.metadata(e, r);
						};
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.User = void 0);
				const i = t(250);
				let s = class extends i.BaseEntity {};
				o(
					[(0, i.ObjectIdColumn)(), n('design:type', i.ObjectID)],
					s.prototype,
					'id',
					void 0
				),
					o(
						[(0, i.Column)(), n('design:type', String)],
						s.prototype,
						'firstName',
						void 0
					),
					o(
						[(0, i.Column)(), n('design:type', String)],
						s.prototype,
						'lastName',
						void 0
					),
					(s = o([(0, i.Entity)()], s)),
					(r.User = s);
			},
			199: function (e, r, t) {
				var o =
					(this && this.__awaiter) ||
					function (e, r, t, o) {
						return new (t || (t = Promise))(function (n, i) {
							function s(e) {
								try {
									u(o.next(e));
								} catch (e) {
									i(e);
								}
							}
							function a(e) {
								try {
									u(o.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function u(e) {
								var r;
								e.done
									? n(e.value)
									: ((r = e.value),
									  r instanceof t
											? r
											: new t(function (e) {
													e(r);
											  })).then(s, a);
							}
							u((o = o.apply(e, r || [])).next());
						});
					};
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.MongoDatabase = void 0);
				const n = t(360),
					i = t(751),
					s = t(616),
					a = t(672);
				class u extends i.Database {
					constructor() {
						super(...arguments),
							(this.getInstance = (e) =>
								o(this, void 0, void 0, function* () {
									return this.instance
										? this.instance
										: ((this.instance = new u()),
										  yield this.initialize(e),
										  this);
								})),
							(this.initialize = (e) =>
								o(this, void 0, void 0, function* () {
									this.dataSource || (this.dataSource = e || s.mongoDataSource);
									try {
										yield this.dataSource.initialize();
									} catch (e) {
										throw new n.DBConnectionError('');
									}
								})),
							(this.getUsers = () =>
								o(this, void 0, void 0, function* () {
									if (!this.dataSource) throw new n.DBConfigurationError('');
									try {
										return yield this.dataSource.mongoManager.find(a.User);
									} catch (e) {
										return [];
									}
								})),
							(this.saveUser = (e) =>
								o(this, void 0, void 0, function* () {
									if (!this.dataSource) throw new n.DBConfigurationError('');
									try {
										return yield this.dataSource.mongoManager.save(e), !0;
									} catch (e) {
										return console.log(e), !1;
									}
								}));
					}
				}
				r.MongoDatabase = u;
			},
			436: (e, r) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.logFormatter = void 0),
					(r.logFormatter = (e) =>
						`${e.method} ${e.originalUrl}\n:::: body: ${e.body}`);
			},
			926: (e, r) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.errorHandlerMiddleware = void 0),
					(r.errorHandlerMiddleware = (e, r, t, o) => {
						t.json({ message: 'error', status: !1, errors: [e.toJSON()] });
					});
			},
			693: (e, r, t) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.invalidRouteMiddleware = void 0);
				const o = t(360);
				r.invalidRouteMiddleware = (e, r, t) => {
					t(new o.InvalidRouteError('no route'));
				};
			},
			597: (e, r, t) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.loggerMiddleware = void 0);
				const o = t(436);
				r.loggerMiddleware = (e, r, t) => {
					console.log((0, o.logFormatter)(e)), t();
				};
			},
			360: (e, r) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.AuthenticationError =
						r.AuthenticationMissingTokenError =
						r.DBConfigurationError =
						r.DBConnectionError =
						r.InvalidRouteError =
						r.InvalidParamsError =
						r.BaseError =
							void 0);
				class t extends Error {
					constructor() {
						super();
					}
				}
				(r.BaseError = t),
					(r.InvalidParamsError = class extends t {
						constructor(e) {
							super(), (this.error = e);
						}
						toJSON() {
							return { code: 'InvalidParamsError', error: this.error };
						}
					}),
					(r.InvalidRouteError = class extends t {
						constructor(e) {
							super(), (this.error = e);
						}
						toJSON() {
							return { code: 'InvalidRouteError', error: this.error };
						}
					}),
					(r.DBConnectionError = class extends t {
						constructor(e) {
							super(), (this.error = e);
						}
						toJSON() {
							return { code: 'DBConnectionError', error: this.error };
						}
					}),
					(r.DBConfigurationError = class extends t {
						constructor(e) {
							super(), (this.error = e);
						}
						toJSON() {
							return { code: 'DBConfigurationError', error: this.error };
						}
					}),
					(r.AuthenticationError = class extends t {
						constructor(e) {
							super(), (this.error = e);
						}
						toJSON() {
							return { code: 'AuthenticationError', error: this.error };
						}
					}),
					(r.AuthenticationMissingTokenError = class extends t {
						constructor(e) {
							super(), (this.error = e);
						}
						toJSON() {
							return {
								code: 'AuthenticationMissingTokenError',
								error: this.error
							};
						}
					});
			},
			320: (e, r, t) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.homeRouter = void 0);
				const o = t(860),
					n = t(85),
					i = (0, o.Router)();
				(r.homeRouter = i), i.route('/').get([], n.homeController);
			},
			710: (e, r, t) => {
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.V1Router = void 0);
				const o = t(860),
					n = t(870),
					i = (0, o.Router)();
				(r.V1Router = i), i.route('/').get(n.apiController);
			},
			730: function (e, r, t) {
				var o =
					(this && this.__awaiter) ||
					function (e, r, t, o) {
						return new (t || (t = Promise))(function (n, i) {
							function s(e) {
								try {
									u(o.next(e));
								} catch (e) {
									i(e);
								}
							}
							function a(e) {
								try {
									u(o.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function u(e) {
								var r;
								e.done
									? n(e.value)
									: ((r = e.value),
									  r instanceof t
											? r
											: new t(function (e) {
													e(r);
											  })).then(s, a);
							}
							u((o = o.apply(e, r || [])).next());
						});
					};
				Object.defineProperty(r, '__esModule', { value: !0 }),
					(r.db = void 0),
					t(81);
				const n = t(684),
					i = t(199);
				let s;
				(r.db = s),
					(0, n.app)().listen(process.env.PORT, () =>
						o(void 0, void 0, void 0, function* () {
							try {
								r.db = s = yield new i.MongoDatabase().getInstance();
							} catch (e) {
								console.log(e);
							}
						})
					);
			},
			455: (e) => {
				e.exports = require('compression');
			},
			582: (e) => {
				e.exports = require('cors');
			},
			81: (e) => {
				e.exports = require('dotenv/config');
			},
			860: (e) => {
				e.exports = require('express');
			},
			170: (e) => {
				e.exports = require('express-prom-bundle');
			},
			806: (e) => {
				e.exports = require('helmet');
			},
			236: (e) => {
				e.exports = require('reflect-metadata');
			},
			250: (e) => {
				e.exports = require('typeorm');
			}
		},
		r = {};
	!(function t(o) {
		var n = r[o];
		if (void 0 !== n) return n.exports;
		var i = (r[o] = { exports: {} });
		return e[o].call(i.exports, i, i.exports, t), i.exports;
	})(730);
})();
