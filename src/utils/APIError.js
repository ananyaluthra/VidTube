class APIError extends Error{
    constructor(
        statusCode,
        message="Somethinmg went wrong",
        error=[],
        stack=""
    ){
    super(message)
    this.statusCode=statusCode;
    this.data=null;
    this.message=message;
    this.success=false
    this.errors=errors
    }
}
export {APIError}