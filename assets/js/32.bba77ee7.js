(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{239:function(t,l,e){"use strict";e.r(l);var a=e(6),i=Object(a.a)({},(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"文件管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件管理"}},[t._v("#")]),t._v(" 文件管理")]),t._v(" "),e("p",[t._v("本系统了设计了一个文件管理功能，用来做文件的上传下载")]),t._v(" "),e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),e("ul",[e("li",[t._v("文件上传")]),t._v(" "),e("li",[t._v("文件下载")]),t._v(" "),e("li",[t._v("图片浏览")])]),t._v(" "),e("h2",{attrs:{id:"设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计"}},[t._v("#")]),t._v(" 设计")]),t._v(" "),e("ul",[e("li",[t._v("t_sys_file_info 表存放文件元信息，包括文件名称，uuid，文件存储路径")]),t._v(" "),e("li",[t._v('在"系统管理"->"参数管理"配置"系统默认上传文件路径"：system.file.upload.path')])]),t._v(" "),e("h2",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),e("ul",[e("li",[t._v("文件上传参考内容管理(CMS)模块中的banner管理和文章管理")]),t._v(" "),e("li",[t._v("文件下载使用url：/file/download?idFile=${fileId}")]),t._v(" "),e("li",[t._v("在线显示图片使用url:/file/getImgStream?idFile=${fileId},如果需要获取图片的base64编码内容，可以通过url：/file/getImgBase64?idFile=${fileId}来获取")]),t._v(" "),e("li",[t._v("具体实现参见：cn.enilu.flash.api.controller.FileController")])])])}),[],!1,null,null,null);l.default=i.exports}}]);