const os = require('os')

setInterval(() => {
    const {freemem, totalmem} = os

    const memoriaTotalMB = parseInt(totalmem() / 1024 / 1024)
    const mememoriaLivreMB = parseInt(freemem() / 1024 / 1024)
    const porcentagemMemoriaUtilizada = parseInt((mememoriaLivreMB / memoriaTotalMB) * 100)

    const estatisticasDaMemoria = {
        livre: `${mememoriaLivreMB} MB`,
        total: `${memoriaTotalMB} MB`,
        utilizada: `${porcentagemMemoriaUtilizada} %`
    }

    console.clear()
    console.log("    STATUS MEMORIA (MB)")
    console.table(estatisticasDaMemoria)

}, 1000)
