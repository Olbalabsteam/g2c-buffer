const tmpBuff = require("./index.js").Buffer

module.exports = {
    from: tmpBuff.from,
    alloc:tmpBuff.alloc,
    allocUnsafe:tmpBuff.allocUnsafe,
    allocUnsafeSlow:tmpBuff.allocUnsafeSlow,
    isBuffer: tmpBuff.isBuffer,
    compare: tmpBuff.compare,
    isEncoding: tmpBuff.isEncoding,
    concat: tmpBuff.concat,
    byteLength: tmpBuff.byteLength,
}