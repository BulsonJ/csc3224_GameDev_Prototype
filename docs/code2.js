gdjs.Death_95ScreenCode = {};
gdjs.Death_95ScreenCode.GDDeath_95ScreenObjects1= [];
gdjs.Death_95ScreenCode.GDDeath_95ScreenObjects2= [];
gdjs.Death_95ScreenCode.GDExit_95ButtonObjects1= [];
gdjs.Death_95ScreenCode.GDExit_95ButtonObjects2= [];
gdjs.Death_95ScreenCode.GDEnemies_95SlainObjects1= [];
gdjs.Death_95ScreenCode.GDEnemies_95SlainObjects2= [];

gdjs.Death_95ScreenCode.conditionTrue_0 = {val:false};
gdjs.Death_95ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Death_95ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Death_95ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Death_95ScreenCode.condition3IsTrue_0 = {val:false};
gdjs.Death_95ScreenCode.conditionTrue_1 = {val:false};
gdjs.Death_95ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Death_95ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Death_95ScreenCode.condition2IsTrue_1 = {val:false};
gdjs.Death_95ScreenCode.condition3IsTrue_1 = {val:false};


gdjs.Death_95ScreenCode.mapOfGDgdjs_46Death_9595ScreenCode_46GDExit_9595ButtonObjects1Objects = Hashtable.newFrom({"Exit_Button": gdjs.Death_95ScreenCode.GDExit_95ButtonObjects1});gdjs.Death_95ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Death_95ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Death_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Death_95ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemies_Slain"), gdjs.Death_95ScreenCode.GDEnemies_95SlainObjects1);
{for(var i = 0, len = gdjs.Death_95ScreenCode.GDEnemies_95SlainObjects1.length ;i < len;++i) {
    gdjs.Death_95ScreenCode.GDEnemies_95SlainObjects1[i].setString("Enemies Slain: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\you_lose.ogg", false, 40, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit_Button"), gdjs.Death_95ScreenCode.GDExit_95ButtonObjects1);

gdjs.Death_95ScreenCode.condition0IsTrue_0.val = false;
gdjs.Death_95ScreenCode.condition1IsTrue_0.val = false;
gdjs.Death_95ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Death_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Death_95ScreenCode.mapOfGDgdjs_46Death_9595ScreenCode_46GDExit_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Death_95ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Death_95ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Death_95ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.Death_95ScreenCode.conditionTrue_1 = gdjs.Death_95ScreenCode.condition2IsTrue_0;
gdjs.Death_95ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8656804);
}
}}
}
if (gdjs.Death_95ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_Menu", true);
}}

}


};

gdjs.Death_95ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Death_95ScreenCode.GDDeath_95ScreenObjects1.length = 0;
gdjs.Death_95ScreenCode.GDDeath_95ScreenObjects2.length = 0;
gdjs.Death_95ScreenCode.GDExit_95ButtonObjects1.length = 0;
gdjs.Death_95ScreenCode.GDExit_95ButtonObjects2.length = 0;
gdjs.Death_95ScreenCode.GDEnemies_95SlainObjects1.length = 0;
gdjs.Death_95ScreenCode.GDEnemies_95SlainObjects2.length = 0;

gdjs.Death_95ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Death_95ScreenCode'] = gdjs.Death_95ScreenCode;
