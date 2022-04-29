type ErrorData = {
	code: string;
	error: string;
};

abstract class BaseError extends Error {
	abstract error: string;
	constructor() {
		super();
	}

	public abstract toJSON(): ErrorData;
}

class InvalidParamsError extends BaseError {
	error: string;
	constructor(error: string) {
		super();
		this.error = error;
	}

	toJSON() {
		return {
			code: 'InvalidParamsError',
			error: this.error
		};
	}
}

class InvalidRouteError extends BaseError {
	error: string;
	constructor(error: string) {
		super();
		this.error = error;
	}

	toJSON() {
		return {
			code: 'InvalidRouteError',
			error: this.error
		};
	}
}

class DBConnectionError extends BaseError {
	error: string;
	constructor(error: string) {
		super();
		this.error = error;
	}

	toJSON() {
		return {
			code: 'DBConnectionError',
			error: this.error
		};
	}
}

class DBConfigurationError extends BaseError {
	error: string;
	constructor(error: string) {
		super();
		this.error = error;
	}

	toJSON() {
		return {
			code: 'DBConfigurationError',
			error: this.error
		};
	}
}

class AuthenticationError extends BaseError {
	error: string;
	constructor(error: string) {
		super();
		this.error = error;
	}

	toJSON() {
		return {
			code: 'AuthenticationError',
			error: this.error
		};
	}
}

class AuthenticationMissingTokenError extends BaseError {
	error: string;
	constructor(error: string) {
		super();
		this.error = error;
	}

	toJSON() {
		return {
			code: 'AuthenticationMissingTokenError',
			error: this.error
		};
	}
}

export {
	BaseError,
	InvalidParamsError,
	InvalidRouteError,
	DBConnectionError,
	DBConfigurationError,
	AuthenticationMissingTokenError,
	AuthenticationError
};
