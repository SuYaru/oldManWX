# oldManWX
一、项目名称	
    西部世界后台管理系统
二、项目介绍 
    本项目由4个模块组成：用户管理、分类管理、新闻管理、订单管理。
三、团队成员
    金..，张..，姜...，邓...，张....，苏...
四、项目模块及模块介绍
  1）用户管理：10个字段，具有模块的增删改查、分页、全选、搜索功能
  2）分类管理：采用jqeasyui 里的树状结构，点击节点时可为其增加/删除子节点。点击下方空白处，若该模块根节点未添加，可新增根节点；若根节点已经存在，弹      出提示框。同时删除文件夹时，可递归删除其所有子节点。
  3）新闻管理：增删改查、批量删除、搜索基本功能，但在修改/添加时，必须指定其所属分类；修改时内容为富文本编辑器，可供新闻内容的多样化编辑；新闻搜索        时，如果有在左边选择哪一类，默认在当前类下检索输入框内容（可选性并列检索）
  4）订单管理：增删改查、批量删除等基本功能。订单拟定的内容针对产品分类，同时订单有开始时间和预计完成时间、订单进度等特性功能，进度表示为可拖动的进度      条，以便后台管理者适时更新其进度。
五、技术栈及项目环境
    技术栈及环境：
      nodejs +express框架+MongoDB+mongoose+EasyUI+Jquery   
    操作工具：
      sourceTree、vscode、github、postman、Flash FXP
    线上工具：
      腾讯云
六、项目周期
    整个项目周期为四天：
      第一天：搭建后台管理的整体框架以及用户管理界面的初步完成；
      第二天：完善用户管理功能，结合分类管理创建新闻管理模块；
      第三天：完善新闻管理功能，创建完成订单管理等剩余模块；
      第四天：项目完善与更改，部署上线，并进行项目总结。
七、项目难点
         分类管理中节点的增删改查：
         在分类管理中需要对每个管理模块对应的节点进行操作，需要做到操作节点的同时处理对应模块中的数据，涉及到相对较为复杂的前后端交互，并对生成的数据     进行进一步处理，在项目中实现步骤颇多。
        添加多个根节点。将嵌入页面的 body 元素设置高度为100%，同时绑定 body 的contextMenu 事件，模拟插件效果。
八、解决方案
    1）删除整个文件夹
        传入该文件夹的id 到一个递归函数中，若有子节点的父元素指向该id ，则继续遍历该子节点的所有子节点，直到某一子节点不再存在其他任何子节点时，递归     返回删除子节点本身。
    2）添加多个根节点
        为了避免重复右键点击而弹出多个右键事件，判断新增框是否已经出现（因为模版按钮自带半透明黑色背景，确保不会重复触发元素事件。而弹出框还是会重复      出现，所以多一个限制条件），若已经出现，则不能再次添加。只要type 属于同一模块，多个节点parent 指向为空即可实现。
