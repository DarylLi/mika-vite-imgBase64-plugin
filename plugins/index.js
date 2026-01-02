import fs from 'fs';

export default function mikaImg2Base64Plugin(limit = 100000) {
  return {
    name: 'mika-img2base64-plugin', // 插件名称，用于调试
    // 转换源文件
    async transform(code, id) {
      //   if (/\.((sc|sa|c)ss)$/.test(id)) {
      //   console.log(id)
      //   return {
      //     code: `html{background-color:pink!important} ${code}`
      //   };
      // }
      if (/\.(png|jp(e?)g|webp)$/.test(id)) {
        console.log(id)
        const stat = await fs.promises.stat(id); // 读取图片的大小
        console.log(stat.size,stat.size > limit)
        if (stat.size > limit) return;
        const buffer = await fs.promises.readFile(id);
        const base64 = buffer.toString("base64"); // 转成 base64
        const type = id.match(/\.(png|jp(e?)g|webp)$/)[1];
        const dataurl = `data:image/${type};base64,${base64}`;
        return {
          code: `export default "${dataurl}"`
        };
      }
    }
  }
}
