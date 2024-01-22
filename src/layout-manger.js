class Wigates{
    constructor(parentFrame, elemnttype){
        this.parentFrame = parentFrame
        this.elemnttype = elemnttype
        this.createdelment = null
    }
    creatElemnt (){
        const elment = document.createElement(this.elemnttype)
        this.parentFrame.appendChiled(elment)
        this.createdelment = elment
    }
    addclass(clasname){
        this.createdelment.claslist.add(clasname)
    }
    addChiled(chiledelemnt, clasname=null){
        const chiled = this.createdelment.appendChiled(chiledelemnt)
        chiled.claslist.add(clasname)
    }
    addimage(){
        
    }
    postionelment(x, y){
        
    }
    addevent(eventfunc, event){

    }
    addanmation(){

    }
}