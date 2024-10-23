export const UI = {

    Button : function(x,y,text,params) {

        //
        //Default Parameters
        //

        if (params == undefined) {
            params = {};
        }
        if (params.backgroundColor == undefined)
            params.backgroundColor = 0xEEEEEE;
        if (params.textStyle == undefined) {
            params.textStyle = {
                fontFamily : 'Arial', 
                fontSize: 24, 
                fill : 0x000000
            }
        }

        //
        //Display Elements
        //

        var ourButton = new PIXI.Container();
            ourButton.interactive = true;
            ourButton.x = x;
            ourButton.y = y;

        var buttonBody = new PIXI.Graphics();
            buttonBody.rect(0, 0, 200, 100);
            buttonBody.fill(params.backgroundColor);
            ourButton.addChild(buttonBody);

            ourButton.body = buttonBody;
        
        var buttonText = new PIXI.Text({text:text,params:{textStyle:params.textStyle}});
            buttonText.anchor.set(.5,.5);
            buttonText.x = 100;
            buttonText.y = 50;
            ourButton.addChild(buttonText);

            ourButton.label = buttonText;

        //
        //Event Listeners
        //

        //Click listener
        ourButton.onclick = function (e) {
            console.log("Clicked");
        };
        ourButton.on("click",(e) => ourButton.onclick(e));
        
        //Pointer down and up
        ourButton.pointerdown = function (e) {
            ourButton.alpha = 0.7;
        };
        ourButton.on("pointerover", (e) => ourButton.pointerdown(e));
        
        ourButton.pointerup = function (e) {
            ourButton.alpha = 1.0;
        };
        ourButton.on("pointerout",(e) => ourButton.pointerup(e));

        //Hover listeners
        ourButton.pointerover = function (e) {
            ourButton.alpha = 0.9;
        };
        ourButton.on("pointerover",(e) => ourButton.pointerover(e));
        
        ourButton.pointerout = function (e) {
            ourButton.alpha = 1.0;
        };
        ourButton.on("pointerout",(e) => ourButton.pointerout(e));

        return ourButton;

    },

    

}