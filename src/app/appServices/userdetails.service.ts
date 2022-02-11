export class userdetails {
    userNo =[ {mobile: '123'}];
    addNumber(mobile:string){
        this.userNo.push({mobile});
    }
}