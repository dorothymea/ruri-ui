import Dialog from "./Dialog.vue"
import { createApp, h } from "vue";

const openDialog = (options) =>{
    const { title, content, confirm, cancel } = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () =>{
        app.unmount()//研究如何实现删除节点
        div.remove()
    }
    const app = createApp({
        render(){
            return h(
                Dialog,
                {
                    visible:true,
                    "onUpdate:visible":(newVisible) => {
                        if(newVisible === false){close()}
                    },
                    confirm,
                    cancel
                },
                {
                    title,
                    content
                }
            )
        }
    })
    app.mount(div)
}

export default openDialog




