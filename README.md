### mika-img2base64-plugin

#### 插件功能
- **自动转换**：将 PNG、JPG/JPEG、WebP 格式的图片自动转换为 Base64 数据 URL
- **大小限制**：默认只转换小于 100KB 的图片，超过限制的图片保持原样
- **配置灵活**：可以通过参数调整转换大小限制

#### 使用方法

1. 在 `vite.config.js` 中导入并配置插件：

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mikaImg2Base64Plugin from 'mika-img2base64-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mikaImg2Base64Plugin(100000) // 参数为转换大小限制（字节）
  ],
})
```

2. 在代码中正常导入图片：

```javascript
import logo from './assets/logo.png'
```

当图片大小小于设定的限制时，插件会自动将其转换为 Base64 格式，无需修改任何导入代码。

#### 插件工作原理

插件通过 Vite 的 `transform` 钩子函数，在构建过程中：
1. 检测导入的图片文件
2. 检查图片大小是否超过设定限制
3. 将符合条件的图片转换为 Base64 数据 URL
4. 返回转换后的代码，替换原始导入

<img width="2542" height="940" alt="image" src="https://github.com/user-attachments/assets/67cd4fde-cc7b-4267-b477-6798451cf2a6" />


