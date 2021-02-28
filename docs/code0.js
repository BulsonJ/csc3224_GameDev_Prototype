gdjs.Main_95MenuCode = {};
gdjs.Main_95MenuCode.GDButton_95PlayObjects1= [];
gdjs.Main_95MenuCode.GDButton_95PlayObjects2= [];
gdjs.Main_95MenuCode.GDButton_95HelpObjects1= [];
gdjs.Main_95MenuCode.GDButton_95HelpObjects2= [];
gdjs.Main_95MenuCode.GDButton_95ExitObjects1= [];
gdjs.Main_95MenuCode.GDButton_95ExitObjects2= [];
gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1= [];
gdjs.Main_95MenuCode.GDPrompt_95HelpObjects2= [];

gdjs.Main_95MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_95MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_95MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_95MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_95MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_95MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_95MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_95MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_95MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_95MenuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDButton_9595PlayObjects1Objects = Hashtable.newFrom({"Button_Play": gdjs.Main_95MenuCode.GDButton_95PlayObjects1});gdjs.Main_95MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Starting_Arena", false);
}}

}


};gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDButton_9595HelpObjects1Objects = Hashtable.newFrom({"Button_Help": gdjs.Main_95MenuCode.GDButton_95HelpObjects1});gdjs.Main_95MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_95MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_95MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95MenuCode.conditionTrue_1 = gdjs.Main_95MenuCode.condition1IsTrue_0;
gdjs.Main_95MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8702116);
}
}}
if (gdjs.Main_95MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Prompt_Help"), gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1);
{for(var i = 0, len = gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1[i].setOpacity(255);
}
}}

}


};gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDButton_9595ExitObjects1Objects = Hashtable.newFrom({"Button_Exit": gdjs.Main_95MenuCode.GDButton_95ExitObjects1});gdjs.Main_95MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Main_95MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Prompt_Help"), gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1);
{for(var i = 0, len = gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\battle_music.ogg", true, 10, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Play"), gdjs.Main_95MenuCode.GDButton_95PlayObjects1);

gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDButton_9595PlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_95MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Help"), gdjs.Main_95MenuCode.GDButton_95HelpObjects1);

gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDButton_9595HelpObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_95MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_95MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_95MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.Main_95MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_95MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.Main_95MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_95MenuCode.conditionTrue_1 = gdjs.Main_95MenuCode.condition2IsTrue_0;
gdjs.Main_95MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8703100);
}
}}
}
if (gdjs.Main_95MenuCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Prompt_Help"), gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1);
{for(var i = 0, len = gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1[i].setOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Exit"), gdjs.Main_95MenuCode.GDButton_95ExitObjects1);

gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95MenuCode.mapOfGDgdjs_46Main_9595MenuCode_46GDButton_9595ExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_95MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Main_95MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95MenuCode.GDButton_95PlayObjects1.length = 0;
gdjs.Main_95MenuCode.GDButton_95PlayObjects2.length = 0;
gdjs.Main_95MenuCode.GDButton_95HelpObjects1.length = 0;
gdjs.Main_95MenuCode.GDButton_95HelpObjects2.length = 0;
gdjs.Main_95MenuCode.GDButton_95ExitObjects1.length = 0;
gdjs.Main_95MenuCode.GDButton_95ExitObjects2.length = 0;
gdjs.Main_95MenuCode.GDPrompt_95HelpObjects1.length = 0;
gdjs.Main_95MenuCode.GDPrompt_95HelpObjects2.length = 0;

gdjs.Main_95MenuCode.eventsList3(runtimeScene);
return;

}

gdjs['Main_95MenuCode'] = gdjs.Main_95MenuCode;
