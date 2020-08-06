 // 绑定事件
 let div = document.querySelector("div");
 // 使用 reduce  函数可以迭代数组的所有元素
 // 第一个参数是执行函数，第二个参数为初始值
 // 传入第二个参数时将所有元素循环一遍
 // 不传第二个参数时从第二个元素开始循环
 // 函数参数说明如下
 // 参数	说明
 // prev	上次调用回调函数返回的结果
 // cur	当前的元素值
 // index	当前的索引
 // array	原数组
 [...div.textContent].reduce((pre, cur, index) => {
     // textContent 属性设置或者返回指定节点的文本内容。 返回值：字符串
     // 获取文本内容，将其展开然后转化为数组
     // eg. <div> www</div>   1.获取到"www" 2.将其展开为"w""w""w" 3.放到数组中 ["w","w","w"]
     // pre = index 时将div清空   不能直接插入新元素
     pre == index && (div.innerHTML = "");
     // 创建span标签
     let span = document.createElement("span");
     // span的文本内容为cur 
     span.textContent = cur;
     // 将span插入到div的下层
     div.appendChild(span);
     // 移入添加类名
     span.addEventListener("mouseover", function() {
         this.classList.add("changeColor");
     });
     // 动画结束移除类名
     span.addEventListener("animationend", function() {
         this.classList.remove("changeColor");
     });
     // 第二个参数 修改pre初始值，默认情况下pre等于第一个元素
 }, 0);