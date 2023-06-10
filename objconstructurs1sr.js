function Players(name,game) {
    this.name=name,
    this.game=game
}


Players.prototype.sayname=function () {
    console.log(this.name);
}

const amir =new Players("amir", "futsal");


amir.sayname();