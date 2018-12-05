

## 效果图如下
 images文件夹下 分别有4个明星的文件夹，明星文件夹内 图片序号为1-5.jpg

![image](https://github.com/lijunshuang/images/blob/master/tuji.png?raw=true)

页面是循环效果的，点左右按钮 可以无限循环 切换。
 若 只切当前明星图集 可以调整代码，在 Bigimg.js 文件中的如下代码

 ```javascript
 render() {
        return (<div className="big_box">   
                    <button className="leftbtn" onClick={()=>{
                        if(this.props.star=="guanxiaotong"&&this.props.idx==1){
                            this.props.changeStar("yangmi")
                            this.props.changeIdx(5)
                        }else if(this.props.star=="jindong"&&this.props.idx==1){
                            this.props.changeStar("guanxiaotong")
                            this.props.changeIdx(5)
                        }else if(this.props.star=="luhan"&&this.props.idx==1){
                            this.props.changeStar("jindong")
                            this.props.changeIdx(5)
                        }else if(this.props.star=="yangmi"&&this.props.idx==1){
                            this.props.changeStar("luhan")
                            this.props.changeIdx(5)
                        }else{
                            this.props.changeIdx(this.props.idx - 1)
                        }
                    }}>&lt;</button>
                    <img src={`images/${this.props.star}/${this.props.idx}.jpg`} />
                    <button className="rightbtn" onClick={()=>{
                        if(this.props.star=="guanxiaotong"&&this.props.idx==5){
                            this.props.changeStar("jindong")
                            this.props.changeIdx(1)
                        }else if(this.props.star=="jindong"&&this.props.idx==5){
                            this.props.changeStar("luhan")
                            this.props.changeIdx(1)
                        }else if(this.props.star=="luhan"&&this.props.idx==5){
                            this.props.changeStar("yangmi")
                            this.props.changeIdx(1)
                        }else if(this.props.star=="yangmi"&&this.props.idx==5){
                            this.props.changeStar("guanxiaotong")
                            this.props.changeIdx(1)
                        }else{
                            this.props.changeIdx(this.props.idx + 1)
                        }
                    }}>&gt;</button>
            </div>
        )
    }
 ```
改成 如下代码 即可
 ```javascript
    render() {
        return (<div className="big_box">
                {
                    this.props.idx - 1 < 1 ? null : 
                    <button className="leftbtn" onClick={()=>{
                        this.props.changeIdx(this.props.idx - 1)
                    }}>&lt;</button>
                }
                <img src={`images/${this.props.star}/${this.props.idx}.jpg`} />
                {
                    this.props.idx + 1 > 5 ? null :
                    <button className="rightbtn" onClick={()=>{
                        this.props.changeIdx(this.props.idx + 1)
                    }}>&gt;</button>
                }
            </div>
        )
    }
 ````




