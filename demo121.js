//从 web.js 文件中导入 title、url、getUrl
import obj from "./web.js"

console.log(obj.title)
console.log(obj.url)
console.log(obj.getUrl())



import url from 'url'
import path from 'path'

// --- url
//new URL 将传入的字符串解析为一个 URL 对象
let DRUrl = new URL('https://www.dengruicode.top:8008/study?id=588#vue3')
//console.log(DRUrl)

console.log('完整的url:', DRUrl.href) // https://www.dengruicode.top:8008/study?id=588#vue3
console.log('协议:', DRUrl.protocol) // https:
console.log('域名:', DRUrl.hostname) // www.dengruicode.top
console.log('端口:', DRUrl.port) // 8008
console.log('域名和端口:', DRUrl.host) // www.dengruicode.top:8008
console.log('协议、域名、端口:', DRUrl.origin) // https://www.dengruicode.top:8008
console.log('路径:', DRUrl.pathname) // /study
console.log('查询字符串:', DRUrl.search) // ?id=588
console.log('查询参数:', DRUrl.searchParams) // URLSearchParams { 'id' => '588' }
console.log('id:', DRUrl.searchParams.get('id')) // 588
console.log('哈希:', DRUrl.hash) // 输出: #vue3

// --- 文件
//file:// 的使用场景: 1.跨平台兼容性 2.url相关的操作
console.log('当前文件的url格式路径:', import。meta.url) // file:///d:/workspace/node/demo/demo.js

let __filename = url.fileURLToPath(import。meta.url)
console.log('当前文件的路径:', __filename) // d:\workspace\node\demo\demo.js

let __dirname = path.dirname(__filename)
console.log('当前文件所在目录的路径:', __dirname) //d:\workspace\node\demo



//file:// 的使用场景: 1.跨平台兼容性 2.url相关的操作
console.log('当前文件的url格式路径:', import。meta.url) // file:///d:/workspace/node/demo/demo.js


let basename = path.basename(__filename) // demo.js
console.log('文件名:', basename)

let extname = path.extname(__filename) // .js
console.log('扩展名:', extname)

/*
pathObj: {
  root: 'd:\\', // 根目录 ( 在 Linux 上是 /, 在 Windows 上是盘符 d:\\ )
  dir: 'd:\\workspace\\node\\demo', //目录路径
  base: 'demo.js', //文件名
  ext: '.js', //扩展名
  name: 'demo' //文件名(不包含扩展名)
}
*/
let pathObj = path.parse(__filename) //路径解析
console.log('pathObj:', pathObj)

//错误示例
console.log('错误示例:', __dirname + "/DR.jpg") // d:\workspace\node\demo/DR.jpg

//path.join 路径拼接
let pathJoin = path.join(__dirname, "/DR.jpg") // d:\workspace\node\demo\DR.jpg
console.log('pathJoin:', pathJoin)

//path.resolve 会解析路径中的 ../(上级目录)  ./(当前目录)  /(根目录)
let pathResolve = path.resolve(__dirname, "/DR.jpg") // d:\DR.jpg
console.log('pathResolve:', pathResolve)

//分隔符
console.log('分隔符:', path.sep) // 在 Linux 上是 /(正斜杠), 在 Windows 上是 \(反斜杠)





//Buffer.alloc(10)创建了一个大小为 10 字节的 Buffer, 并使用 0 填充 [作用:内存分配]
//<Buffer 00 00 00 00 00 00 00 00 00 00> 以十六进制的形式显示每个字节的内容 (每个 00 都代表一个字节的零值)
//Buffer 对象内部存储的是二进制数据, 为了方便阅读, 在打印 Buffer 对象时, 通常会将每个字节的数据转换为十六进制形式
console.log('创建 Buffer:', Buffer.alloc(10))
console.log('Buffer 的长度:', Buffer.alloc(10).length)

//String 转换为 Buffer (常用于将数据写入文件、通过网络发送数据等)
let urlBuffer = Buffer.from('dengruicode.com', 'utf8') //创建一个包含字符串 'dengruicode.com' 的 Buffer
console.log('字符串转换为 Buffer:', urlBuffer)

//Buffer 转换为 String (常用于从文件读取数据、接收到网络数据后解析内容)
console.log('Buffer 转换为字符串:', urlBuffer.toString('utf8'))

//Buffer 转换为 Base64 (常用于在文本协议中传输二进制数据,如:嵌入图像资源、电子邮件附件等)
const urlBase64 = urlBuffer.toString('base64')
console.log('Buffer 转换为 Base64:', urlBase64)

//Base64 转换为 Buffer
console.log('Base64 转换为 Buffer:', Buffer.from(urlBase64, 'base64'))


import fs from 'fs'

//创建目录
const createDir = async (path) => {
    try {
        await fs.promises.mkdir(path, { recursive: true }) // recursive: true 允许递归创建多级目录
        console.log("目录创建成功")
    } catch (err) {
        //ENOENT(Error NO ENTry) - no such file or directory (文件或目录不存在)
        console.error(`目录创建失败: ${err}`)
    }
}

let dir = "code/log/"
// createDir(dir) //创建多级目录


//写入文件
const writeFile = async (path, content) => {
    try {
        await fs.promises.writeFile(path, content)
        console.log("文件写入成功")
    } catch (err) {
        console.error(`文件写入失败: ${err}`)
    }
}

let name22 = "web.txt"
let path222 = dir + name22 // DR/log/web.txt
let content2222 = "dengruicode.com"
//writeFile(path1, content)


//追加文件
const appendFile = async (path, content) => {
    try {
        await fs.promises.appendFile(path, content)
        console.log("追加写入成功")
    } catch (err) {
        console.error(`追加写入失败: ${err}`)
    }
}

let appendContent = "\n邓瑞编程"
//appendFile(path1, appendContent)


//读取文件
const readFile = async (path) => {
    try {
        const data = await fs.promises.readFile(path)
        console.log(String(data))
    } catch (err) {
        console.error(`文件读取失败: ${err}`)
    }
}

//readFile(path1)


//检测文件或目录是否存在
/*
  fs.promises.constants.F_OK 检查文件是否存在
  fs.promises.constants.R_OK 检查文件是否可读
  fs.promises.constants.W_OK 检查文件是否可写
  fs.promises.constants.X_OK 检查文件是否可执行

  ENOENT(Error NO ENTry) - no such file or directory (文件或目录不存在)
  EEXIST - file already exists (文件已存在)
  EACCES - permission denied (没有足够的权限)
*/
const fileOrDirExist = async (path) => {
    try {
        await fs.promises.access(path, fs.promises.constants.F_OK)
        console.error("文件或目录存在")
    } catch (err) {
        console.error(`文件或目录不存在: ${err}`)
    }
}

// fileOrDirExist("code/log")
// fileOrDirExist("code/log/web.txt")


//获取文件或目录详细信息
const fileOrDirStats = async (path) => {
    try {
        let stats = await fs.promises.stat(path)
        //console.log(stats)

        // 检查是否是一个文件  
        if (stats.isFile()) {
            console.log(`${path} 是文件`)
            return
        }

        // 检查是否是一个目录  
        if (stats.isDirectory()) {
            console.log(`${path} 是目录`)
            return
        }
    } catch (err) {
        console.error(`获取文件或目录详细信息时出错: ${err}`)
    }
}

// fileOrDirStats("code/log")
// fileOrDirStats("code/log/web.txt")


//文件或目录重命名
const fileOrDirRename = async (oldPath, newPath) => {
    try {
        await fs.promises.rename(oldPath, newPath)
        console.log("文件或目录重命名成功")
    } catch (err) {
        console.error(`文件或目录重命名失败: ${err}`)
    }
}

// fileOrDirRename("code/log", "code/newLog")
// fileOrDirRename("code/newLog/web.txt", "code/newLog/newWeb.txt")


//删除文件
const deleteFile = async (path) => {
    try {
        await fs.promises.unlink(path)
        console.log("文件删除成功")
    } catch (err) {
        console.error(`文件删除失败: ${err}`)
    }
}

// deleteFile("code/newLog/newWeb.txt")


//删除目录
const deleteDir = async (path) => {
    try {
        await fs.promises.rm(path, { recursive: true }) // recursive: true 允许递归删除多级目录
        console.log("目录删除成功")
    } catch (err) {
        console.error(`目录删除失败: ${err}`)
    }
}

// deleteDir("code")























// 为什么使用Stream?

//      流(Stream)是一种处理数据的方式

//      对于比较大的文件,流可以逐步处理数据,而不是一次性将整个文件加载到内存中,

//      这样可以节省内存资源,避免内存溢出问题


//创建目录
const createDir1 = async (path) => {
    try {
        await fs.promises.mkdir(path, { recursive: true }) // recursive: true 允许递归创建多级目录
        console.log("目录创建成功")
    } catch (err) {
        //ENOENT(Error NO ENTry) - no such file or directory (文件或目录不存在)
        console.error(`目录创建失败: ${err}`)
    }
}

let dir1 = "DR/log/"
// createDir1(dir1) //创建多级目录


//写入文件
/*
const writeFile = async (path, content) => {
  try {
    await fs.promises.writeFile(path, content)
    console.log("文件写入成功")
  } catch (err) {
    console.error(`文件写入失败: ${err}`)
  }
}
*/
const writeFile1 = (path, content) => {
    const writeStream = fs.createWriteStream(path)

    writeStream.on('error', err => {
        console.error(`文件写入失败： ${err}`)
        writeStream.close() // 出错时关闭流
    })

    writeStream.on('finish', () => {
        console.log("文件写入成功")
    })

    writeStream.write(content, 'utf8')
    writeStream.end()
}

let name1 = "web.txt"
let path2 = dir1 + name1 // DR/log/web.txt
let content1 = "dengruicode.com"
// writeFile1(path2, content1)


//追加文件
/*
const appendFile = async (path, content) => {
  try {
    await fs.promises.appendFile(path, content)
    console.log("追加写入成功")
  } catch (err) {
    console.error(`追加写入失败: ${err}`)
  }
}
*/
const appendFile1 = (path, content) => {
    const appendStream = fs.createWriteStream(path, { flags: 'a' })

    appendStream.on('error', err => {
        console.error(`追加写入失败 ${err}`)
        writeStream.close() // 出错时关闭流
    })

    appendStream.on('finish', () => {
        console.log("追加写入成功")
    })

    appendStream.write(content, 'utf8')
    appendStream.end()
}

let appendContent1 = "\n邓瑞编程"
//appendFile1(path2, appendContent)


//读取文件
/*
const readFile = async (path) => {
  try {
    const data = await fs.promises.readFile(path)
    console.log(String(data))
  } catch (err) {
    console.error(`文件读取失败: ${err}`)
  }
}
*/
const readFile1 = (path) => {
    const readStream = fs.createReadStream(path)

    let content = ''
    readStream.on('data', chunk => {
        console.log(chunk) //chunk是指在流中传输的数据块
        content += chunk.toString('utf8') //将Buffer转换为UTF-8编码的字符串
    })

    readStream.on('end', () => {
        console.log(content)
    })

    readStream.on('error', err => {
        console.error(`文件读取失败: ${err}`)
    })
}

// readFile1(path2)


//检测文件或目录是否存在
/*
  fs.promises.constants.F_OK 检查文件是否存在
  fs.promises.constants.R_OK 检查文件是否可读
  fs.promises.constants.W_OK 检查文件是否可写
  fs.promises.constants.X_OK 检查文件是否可执行

  ENOENT(Error NO ENTry) - no such file or directory (文件或目录不存在)
  EEXIST - file already exists (文件已存在)
  EACCES - permission denied (没有足够的权限)
*/
const fileOrDirExist1 = async (path) => {
    try {
        await fs.promises.access(path, fs.promises.constants.F_OK)
        console.error("文件或目录存在")
    } catch (err) {
        console.error(`文件或目录不存在: ${err}`)
    }
}

//fileOrDirExist("DR/log")
// fileOrDirExist1("DR/log/web.txt")


//获取文件或目录详细信息
const fileOrDirStats1 = async (path) => {
    try {
        let stats = await fs.promises.stat(path)
        //console.log(stats)

        // 检查是否是一个文件  
        if (stats.isFile()) {
            console.log(`${path} 是文件`)
            return
        }

        // 检查是否是一个目录  
        if (stats.isDirectory()) {
            console.log(`${path} 是目录`)
            return
        }
    } catch (err) {
        console.error(`获取文件或目录详细信息时出错: ${err}`)
    }
}

//fileOrDirStats1("DR/log")
//fileOrDirStats1("DR/log/web.txt")


//文件或目录重命名
const fileOrDirRename1 = async (oldPath, newPath) => {
    try {
        await fs.promises.rename(oldPath, newPath)
        console.log("文件或目录重命名成功")
    } catch (err) {
        console.error(`文件或目录重命名失败: ${err}`)
    }
}

//fileOrDirRename1("DR/log", "DR/newLog")
//fileOrDirRename("DR/newLog/web.txt", "DR/newLog/newWeb.txt")


//删除文件
const deleteFile1 = async (path) => {
    try {
        await fs.promises.unlink(path)
        console.log("文件删除成功")
    } catch (err) {
        console.error(`文件删除失败: ${err}`)
    }
}

// deleteFile("DR/newLog/newWeb.txt")


//删除目录
const deleteDir1 = async (path) => {
    try {
        await fs.promises.rm(path, { recursive: true }) // recursive: true 允许递归删除多级目录
        console.log("目录删除成功")
    } catch (err) {
        console.error(`目录删除失败: ${err}`)
    }
}

// deleteDir1("DR")































import os from 'os'

//bytes转换为GB
const bytesToGB = bytes => (bytes / (1024 * 1024 * 1024)).toFixed(2)

console.log("内核版本:", os.version())
console.log("操作系统类型:", os.type())
console.log("系统架构:", os.arch())
console.log("主机名:", os.hostname())
console.log("总内存(GB):", bytesToGB(os.totalmem()))
console.log("空闲内存(GB):", bytesToGB(os.freemem()))
console.log("CPU核心数:", os.cpus().length)
console.log("当前用户的主目录:", os.homedir())
console.log("当前用户的信息:", os.userInfo())




































import crypto from 'crypto'

//使用md5算法生成数据的哈希值
const md5 = data => {
    const hash = crypto.createHash("md5") //创建一个md5的哈希对象
    hash.update(data) //更新哈希对象, 处理并传入待哈希的数据
    return hash.digest("hex") //计算哈希值并以十六进制字符串的形式返回
}

//使用sha-1算法生成数据的哈希值
const sha1 = data => {
    const hash = crypto.createHash("sha1")
    hash.update(data)
    return hash.digest("hex")
}

//生成指定长度的随机字符串 - 常用于生成临时密码、令牌等
const randomStr = length => {
    /*
        每个字节在转换为十六进制字符串后会变成两个字符
        所以字节的数量是所需字符串长度的一半(向上取整)
        如:要生成20位的随机字符串,则需要10个字节
    */
    const bytesNeed = Math.ceil(length / 2)
    const randomBytes = crypto.randomBytes(bytesNeed)

    const hexStr = randomBytes.toString('hex') //字节转换成十六进制字符串

    return hexStr.slice(0, length) //截取指定长度的字符串,确保字符串长度符合要求
}

console.log("md5:", md5("dengruicode.com"))
console.log("sha1:", sha1("dengruicode.com"))
console.log("随机字符串:", randomStr(20))

/*
    AES(Advanced Encryption Standard 高级加密标准)
    对称加密算法: 加密和解密使用相同的密钥
*/
//使用AES-GCM模式加密
const aesGcmEncrypt = (plaintext, key) => {
    //nonce(Number Used Once 一次性使用的数字) 是一个随机字符串 (AES-GCM的nonce长度应为12字节)
    //nonce 用于确保相同的明文也不会产生相同的密文, 从而增强安全性
    const nonce = crypto.randomBytes(12)

    //创建加密器, 使用 aes-256-gcm 算法、给定密钥和nonce
    const cipher = crypto.createCipheriv('aes-256-gcm', key, nonce)

    //使用加密器对明文进行加密, 并将结果转换为十六进制字符串
    let encrypted = cipher.update(plaintext, 'utf8', 'hex')
    encrypted += cipher.final('hex') //加密后的密文数据

    //获取认证标签,并将其转换为十六进制字符串
    //认证标签用于验证数据的完整性和来源的真实性, 防止篡改和假冒
    const authTag = cipher.getAuthTag().toString('hex')

    //将加密后的数据、nonce 和认证标签合并为一个 json 字符串
    const encryptedJson = JSON.stringify({
        nonce: nonce.toString('base64'), //将nonce转换为Base64编码
        encrypted: encrypted,
        authTag: authTag
    })
    return encryptedJson
}

//使用AES-GCM模式解密
const aesGcmDecrypt = (encryptedJson, key) => {
    //从 json 字符串中解析出加密数据、nonce 和认证标签
    const { nonce, encrypted, authTag } = JSON.parse(encryptedJson)

    //将 Base64 编码的 nonce 转换回 Buffer 格式, 以便于解密器使用
    const nonceBuffer = Buffer.from(nonce, 'base64')

    //创建解密器, 使用 aes-256-gcm 算法、给定密钥和nonceBuffer
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, nonceBuffer)

    //设置解密时用于校验的认证标签
    decipher.setAuthTag(Buffer.from(authTag, 'hex'))

    //使用解密器对加密后的数据进行解密, 将十六进制格式的密文转换为 UTF-8 字符串
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')

    return decrypted
}

// 密钥长度应为16、24、32字节，对应于AES-128、AES-192、AES-256
const key = crypto.randomBytes(32) // 用于加密和解密的密钥 [生成一个随机的AES-256密钥]
const plaintext = "邓瑞编程" // 要加密的原始文本

const encryptedJson = aesGcmEncrypt(plaintext, key)
const decryptedText = aesGcmDecrypt(encryptedJson, key)

console.log('加密:', encryptedJson)
console.log('解密:', decryptedText)










































import util from 'util'

/*
  格式化字符串,将参数插入到占位符所在的位置
  %s 是一个字符串(String)类型的占位符
  %d 是一个十进制整数(Decimal Integer)类型的占位符
*/
const url11 = 'dengruicode.com'
const user = 100
const msg = util.format('网址: %s, 在线人数: %d', url11, user)
console.log(msg)

//将对象转换为字符串
const webObj = { url: 'www.dengruicode.com', user: 200 }
console.log('webObj:', typeof webObj, webObj)
const webStr = util.inspect(webObj)
console.log('webStr:', typeof webStr, webStr)











































import http from 'http'

//本地回环地址是一个特殊的ip地址(通常为 127.0.0.1), 主要用于同一台主机的通信和测试
const hostname = '127.0.0.1' // 服务器监听的ip地址(本地回环地址), 意味着服务器只接受来自本机的网络请求
const port = 8008 //服务器监听的端口号

//http.createServer 创建一个 http 服务器实例
const server = http.createServer((request, response) => {
    response.write("<h3>dengruicode.com</h3>") //发送响应数据
    response.end() //结束响应
})

//启动 http 服务器,并在指定的ip地址(127.0.0.1)和端口(8008)上监听连接请求
server.listen(port, hostname, () => {
    console.log(`服务器已启动: http://${hostname}:${port}`)
})





























//本地回环地址是一个特殊的ip地址(通常为 127.0.0.1), 主要用于同一台主机的通信和测试
const hostname1 = '127.0.0.1' // 服务器监听的ip地址(本地回环地址), 意味着服务器只接受来自本机的网络请求
const port1 = 8009 //服务器监听的端口号

//http.createServer 创建一个 http 服务器实例
const server1 = http.createServer((request, response) => {
    // ------ request
    //request.method: http 请求的方法
    //request.url: 请求的 url
    console.log(`${request.method} ${request.url}`)

    //console.log(request.headers) //http 请求的头部信息
    console.log("referer:", request.headers.referer)
    console.log("user-agent:", request.headers['user-agent'])
    console.log("\n") //换行

    // ------ response
    response.statusCode = 200 //200 状态码表示请求成功
    response.setHeader('Content-Type', 'text/html; charset=UTF-8') //设置内容类型为 'text/html; charset=UTF-8' 的响应头

    //response.end("<h3>dengruicode.com</h3>") //发送响应数据并结束响应
    response.write("<h3>dengruicode.com</h3>")
    response.end()
})

//启动 http 服务器,并在指定的ip地址(127.0.0.1)和端口(8008)上监听连接请求
server1.listen(port1, hostname1, () => {
    console.log(`服务器已启动: http://${hostname1}:${port1}`)
})


// 说明
// {
//   host: '127.0.0.1:8008',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
//   'sec-ch-ua-mobile': '?0',
//   'sec-ch-ua-platform': '"Windows"',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'sec-fetch-dest': 'document',
//   'accept-encoding': 'gzip, deflate, br, zstd',
//   'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6'
// }


// host: '127.0.0.1:8008'
//   请求的目标服务器地址和端口号
// connection: 'keep-alive'
//   使用持久连接, 即在一个TCP连接上可以发送多个HTTP请求
// 'cache-control': 'max-age=0'
//   最大缓存时间为0, 表示不使用缓存, 每次请求都需要从服务器获取最新的数据
// 'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"'
//   浏览器的用户代理字符串, 用于告诉服务器客户端使用的浏览器类型和版本信息
// 'sec-ch-ua-mobile': '?0'
//   是否为移动设备, 0表示非移动设备
// 'sec-ch-ua-platform': '"Windows"'
//   运行浏览器的平台
// 'upgrade-insecure-requests': '1'
//   客户端希望升级到更安全的协议, 如HTTPS
// 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
//   客户端的用户代理字符串, 描述了浏览器和操作系统等信息
// accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
//   可接受的内容类型, 包括文本/html、xml、图像等
// 'sec-fetch-site': 'none'
//   请求的来源站点, none表示没有来源站点
// 'sec-fetch-mode': 'navigate'
//   请求的模式, navigate表示页面导航请求
// 'sec-fetch-user': '?1'
//   请求是否涉及用户行为, ?1表示可能涉及用户行为
// 'sec-fetch-dest': 'document'
//   请求的目标, document表示请求的目标是文档
// 'accept-encoding': 'gzip, deflate, br, zstd'
//   客户端可以接受的压缩编码格式
// 'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6'
//   客户端接受的语言及其优先级

// 注
// referer: 'http://127.0.0.1:8008/'
//   发送请求的页面地址, 服务器通常用来获取请求来源的信息































































//本地回环地址是一个特殊的ip地址(通常为 127.0.0.1), 主要用于同一台主机的通信和测试
const hostname2 = '127.0.0.1' // 服务器监听的ip地址(本地回环地址), 意味着服务器只接受来自本机的网络请求
const port2 = 8010 //服务器监听的端口号

//http.createServer 创建一个 http 服务器实例
const server2 = http.createServer((request, response) => {
  // ------ url http://127.0.0.1:8010/?id=1&web=dengruicode.com
  let fullUrl = `http://${hostname2}:${port2}${request.url}` // 构造完整的 url 字符串
  let urlObj = new URL(fullUrl)
  //console.log(urlObj)

  const queryObj = new URLSearchParams(urlObj.search) //获取查询参数对象
  //console.log(queryObj)
  console.log("web:", queryObj.get('web'))

  // ------ request
  //request.method: http 请求的方法
  //request.url: 请求的 url
  console.log(`${request.method} ${request.url}`)

  //console.log(request.headers) //http 请求的头部信息
  console.log("referer:", request.headers.referer)
  console.log("user-agent:", request.headers['user-agent'])
  console.log("\n") //换行

  // ------ response
  response.statusCode = 200 //200 状态码表示请求成功
  //设置内容类型为 'text/html; charset=UTF-8' 的响应头
  response.setHeader('Content-Type', 'text/html; charset=UTF-8')

  //response.end("<h3>dengruicode.com</h3>") //发送响应数据并结束响应
  response.write("<h3>dengruicode.com1111111111111</h3>")
  response.end()
})

//启动 http 服务器,并在指定的ip地址(127.0.0.1)和端口(8008)上监听连接请求
server2.listen(port2, hostname2, () => {
  console.log(`服务器已启动: http://${hostname2}:${port2}`)
})
