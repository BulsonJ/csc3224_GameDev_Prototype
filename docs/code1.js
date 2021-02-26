gdjs.Starting_95ArenaCode = {};
gdjs.Starting_95ArenaCode.forEachIndex2 = 0;

gdjs.Starting_95ArenaCode.forEachObjects2 = [];

gdjs.Starting_95ArenaCode.forEachTemporary2 = null;

gdjs.Starting_95ArenaCode.forEachTotalCount2 = 0;

gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1= [];
gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects2= [];
gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects3= [];
gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1= [];
gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2= [];
gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects3= [];
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1= [];
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects2= [];
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects3= [];
gdjs.Starting_95ArenaCode.GDPlayerObjects1= [];
gdjs.Starting_95ArenaCode.GDPlayerObjects2= [];
gdjs.Starting_95ArenaCode.GDPlayerObjects3= [];
gdjs.Starting_95ArenaCode.GDSpectatorObjects1= [];
gdjs.Starting_95ArenaCode.GDSpectatorObjects2= [];
gdjs.Starting_95ArenaCode.GDSpectatorObjects3= [];
gdjs.Starting_95ArenaCode.GDEnemyObjects1= [];
gdjs.Starting_95ArenaCode.GDEnemyObjects2= [];
gdjs.Starting_95ArenaCode.GDEnemyObjects3= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects2= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects3= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalTopObjects1= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalTopObjects2= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalTopObjects3= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects1= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects2= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects3= [];
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects1= [];
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects2= [];
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects3= [];
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1= [];
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects2= [];
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects3= [];
gdjs.Starting_95ArenaCode.GDFloorTile_95StairsObjects1= [];
gdjs.Starting_95ArenaCode.GDFloorTile_95StairsObjects2= [];
gdjs.Starting_95ArenaCode.GDFloorTile_95StairsObjects3= [];
gdjs.Starting_95ArenaCode.GDWall_95Back_95BrickSandObjects1= [];
gdjs.Starting_95ArenaCode.GDWall_95Back_95BrickSandObjects2= [];
gdjs.Starting_95ArenaCode.GDWall_95Back_95BrickSandObjects3= [];
gdjs.Starting_95ArenaCode.GDKillCounterObjects1= [];
gdjs.Starting_95ArenaCode.GDKillCounterObjects2= [];
gdjs.Starting_95ArenaCode.GDKillCounterObjects3= [];
gdjs.Starting_95ArenaCode.GDHealthObjects1= [];
gdjs.Starting_95ArenaCode.GDHealthObjects2= [];
gdjs.Starting_95ArenaCode.GDHealthObjects3= [];
gdjs.Starting_95ArenaCode.GDStatusObjects1= [];
gdjs.Starting_95ArenaCode.GDStatusObjects2= [];
gdjs.Starting_95ArenaCode.GDStatusObjects3= [];
gdjs.Starting_95ArenaCode.GDHealth_95Status_95BackObjects1= [];
gdjs.Starting_95ArenaCode.GDHealth_95Status_95BackObjects2= [];
gdjs.Starting_95ArenaCode.GDHealth_95Status_95BackObjects3= [];
gdjs.Starting_95ArenaCode.GDHealth_95StatusObjects1= [];
gdjs.Starting_95ArenaCode.GDHealth_95StatusObjects2= [];
gdjs.Starting_95ArenaCode.GDHealth_95StatusObjects3= [];

gdjs.Starting_95ArenaCode.conditionTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition0IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition1IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition2IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition3IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition4IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition5IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.conditionTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition0IsTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition1IsTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition2IsTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition3IsTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition4IsTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition5IsTrue_1 = {val:false};


gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDButton_9595DebugObjects1Objects = Hashtable.newFrom({"Button_Debug": gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1});gdjs.Starting_95ArenaCode.eventsList0 = function(runtimeScene) {

{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Starting_95ArenaCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Starting_95ArenaCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


};gdjs.Starting_95ArenaCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Starting_95ArenaCode.GDPlayerObjects1, gdjs.Starting_95ArenaCode.GDPlayerObjects2);


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Starting_95ArenaCode.GDPlayerObjects2[i].isFlippedX()) ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects2[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects2.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HitPointBox"), gdjs.Starting_95ArenaCode.GDHitPointBoxObjects2);
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBoxObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBoxObjects2[i].setPosition((( gdjs.Starting_95ArenaCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDPlayerObjects2[0].getPointX("HitPoint")),(( gdjs.Starting_95ArenaCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDPlayerObjects2[0].getPointY("HitPoint")));
}
}}

}


{

/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].isFlippedX() ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HitPointBox"), gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1);
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1[i].setPosition((( gdjs.Starting_95ArenaCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDPlayerObjects1[0].getPointX("HitPoint")) - 8,(( gdjs.Starting_95ArenaCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDPlayerObjects1[0].getPointY("HitPoint")));
}
}}

}


};gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Starting_95ArenaCode.GDPlayerObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDCollision_9595BoundaryObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595VerticalObjects1Objects = Hashtable.newFrom({"Collision_Boundary": gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1, "WallTiled_Vertical": gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDCollision_9595BoundaryObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595VerticalObjects1Objects = Hashtable.newFrom({"Collision_Boundary": gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1, "WallTiled_Vertical": gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1});gdjs.Starting_95ArenaCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Starting_95ArenaCode.GDPlayerObjects1, gdjs.Starting_95ArenaCode.GDPlayerObjects2);


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Starting_95ArenaCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects2[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects2.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


};gdjs.Starting_95ArenaCode.eventsList3 = function(runtimeScene) {

{


{
}

}


};gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDHitPointBoxObjects1Objects = Hashtable.newFrom({"HitPointBox": gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Starting_95ArenaCode.GDEnemyObjects1});gdjs.Starting_95ArenaCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Starting_95ArenaCode.GDPlayerObjects1, gdjs.Starting_95ArenaCode.GDPlayerObjects2);


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Starting_95ArenaCode.GDPlayerObjects2[i].isFlippedX()) ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects2[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects2.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects2[i].addForce(100, 0, 1);
}
}}

}


{

/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].isFlippedX() ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].addForce(-(100), 0, 1);
}
}}

}


};gdjs.Starting_95ArenaCode.eventsList5 = function(runtimeScene) {

{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Starting_95ArenaCode.GDPlayerObjects1, gdjs.Starting_95ArenaCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects2[i].addForce(0, -(100), 1);
}
}}

}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Starting_95ArenaCode.GDPlayerObjects1, gdjs.Starting_95ArenaCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects2[i].addForce(0, 100, 1);
}
}}

}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Starting_95ArenaCode.GDPlayerObjects1, gdjs.Starting_95ArenaCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects2[i].addForce(-(100), 0, 1);
}
}}

}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Starting_95ArenaCode.GDPlayerObjects1, gdjs.Starting_95ArenaCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects2[i].addForce(100, 0, 1);
}
}}

}


{



}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition2IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if ( gdjs.Starting_95ArenaCode.condition1IsTrue_0.val ) {
{
gdjs.Starting_95ArenaCode.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}if ( gdjs.Starting_95ArenaCode.condition2IsTrue_0.val ) {
{
gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}}
}
}
if (gdjs.Starting_95ArenaCode.condition3IsTrue_0.val) {

{ //Subevents
gdjs.Starting_95ArenaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDHitPointBox_9595EnemyObjects2Objects = Hashtable.newFrom({"HitPointBox_Enemy": gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2});gdjs.Starting_95ArenaCode.eventsList6 = function(runtimeScene) {

};gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDHitPointBox_9595EnemyObjects2Objects = Hashtable.newFrom({"HitPointBox_Enemy": gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2});gdjs.Starting_95ArenaCode.eventsList7 = function(runtimeScene) {

};gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Starting_95ArenaCode.GDEnemyObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Starting_95ArenaCode.GDPlayerObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Starting_95ArenaCode.GDEnemyObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Starting_95ArenaCode.GDPlayerObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Starting_95ArenaCode.GDEnemyObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Starting_95ArenaCode.GDPlayerObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Starting_95ArenaCode.GDEnemyObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Starting_95ArenaCode.GDPlayerObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Starting_95ArenaCode.GDPlayerObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDHitPointBox_9595EnemyObjects1Objects = Hashtable.newFrom({"HitPointBox_Enemy": gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Starting_95ArenaCode.GDEnemyObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Starting_95ArenaCode.GDPlayerObjects1});gdjs.Starting_95ArenaCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Debug"), gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition2IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDButton_9595DebugObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Starting_95ArenaCode.condition1IsTrue_0.val ) {
{
{gdjs.Starting_95ArenaCode.conditionTrue_1 = gdjs.Starting_95ArenaCode.condition2IsTrue_0;
gdjs.Starting_95ArenaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7392628);
}
}}
}
if (gdjs.Starting_95ArenaCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.Starting_95ArenaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Button_Debug"), gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collision_Boundary"), gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitPointBox"), gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitPointBox_Enemy"), gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.Starting_95ArenaCode.GDStatusObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDStatusObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Button_Debug"), gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collision_Boundary"), gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitPointBox"), gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitPointBox_Enemy"), gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.Starting_95ArenaCode.GDStatusObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1[i].setOpacity(200);
}
for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1[i].setOpacity(200);
}
for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1[i].setOpacity(200);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDStatusObjects1[i].setOpacity(255);
}
}}

}


{



}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Starting_95ArenaCode.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("KillCounter"), gdjs.Starting_95ArenaCode.GDKillCounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDKillCounterObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDKillCounterObjects1[i].setString("Enemies Slain:" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHealthObjects1[i].setString("Health: " + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Starting_95ArenaCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Starting_95ArenaCode.GDPlayerObjects1[0].getVariables()).get("Health")))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.Starting_95ArenaCode.GDStatusObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDStatusObjects1[i].setString("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.Starting_95ArenaCode.GDStatusObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDStatusObjects1[i].setString("Moving");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.Starting_95ArenaCode.GDStatusObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDStatusObjects1[i].setString("Attacking");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().get("Dodge")) == 1 ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.Starting_95ArenaCode.GDStatusObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDStatusObjects1[i].setString("Dodging");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.Starting_95ArenaCode.GDPlayerObjects1.length !== 0 ? gdjs.Starting_95ArenaCode.GDPlayerObjects1[0] : null), 0, 0, 480, 270, true, "", 0);
}
{ //Subevents
gdjs.Starting_95ArenaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Collision_Boundary"), gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallTiled_Vertical"), gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDCollision_9595BoundaryObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595VerticalObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getAnimation() == 2) ) {
        gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}}
if (gdjs.Starting_95ArenaCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1 */
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
/* Reuse gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDCollision_9595BoundaryObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595VerticalObjects1Objects, false);
}
}}

}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().get("Dodge")) == 0 ) {
        gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}}
if (gdjs.Starting_95ArenaCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Starting_95ArenaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Health_Status"), gdjs.Starting_95ArenaCode.GDHealth_95StatusObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHealth_95StatusObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHealth_95StatusObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.Starting_95ArenaCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Starting_95ArenaCode.GDPlayerObjects1[0].getVariables()).get("Health"))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition2IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getAnimation() == 2) ) {
        gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition1IsTrue_0.val ) {
{
{gdjs.Starting_95ArenaCode.conditionTrue_1 = gdjs.Starting_95ArenaCode.condition2IsTrue_0;
gdjs.Starting_95ArenaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7952564);
}
}if ( gdjs.Starting_95ArenaCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().get("Dodge")) == 0 ) {
        gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}}
}
}
if (gdjs.Starting_95ArenaCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].returnVariable(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}
{ //Subevents
gdjs.Starting_95ArenaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getAnimation() == 2 ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].hasAnimationEnded() ) {
        gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}}
if (gdjs.Starting_95ArenaCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].returnVariable(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(100);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitPointBox"), gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition2IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition4IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDHitPointBoxObjects1Objects, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].getAnimation() == 1) ) {
        gdjs.Starting_95ArenaCode.condition2IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDEnemyObjects1[k] = gdjs.Starting_95ArenaCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDEnemyObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getAnimationFrame() == 2 ) {
        gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition3IsTrue_0.val ) {
{
{gdjs.Starting_95ArenaCode.conditionTrue_1 = gdjs.Starting_95ArenaCode.condition4IsTrue_0;
gdjs.Starting_95ArenaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7956716);
}
}}
}
}
}
if (gdjs.Starting_95ArenaCode.condition4IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].setAnimation(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition2IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getAnimation() == 3) ) {
        gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition1IsTrue_0.val ) {
{
{gdjs.Starting_95ArenaCode.conditionTrue_1 = gdjs.Starting_95ArenaCode.condition2IsTrue_0;
gdjs.Starting_95ArenaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7958748);
}
}if ( gdjs.Starting_95ArenaCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}}
}
}
if (gdjs.Starting_95ArenaCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].returnVariable(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().get("Dodge")).setNumber(1);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].setAnimation(3);
}
}
{ //Subevents
gdjs.Starting_95ArenaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getAnimation() == 3 ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getAnimationFrame() == 5 ) {
        gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition1IsTrue_0.val ) {
{
{gdjs.Starting_95ArenaCode.conditionTrue_1 = gdjs.Starting_95ArenaCode.condition2IsTrue_0;
gdjs.Starting_95ArenaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7965484);
}
}}
}
if (gdjs.Starting_95ArenaCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].returnVariable(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().get("Dodge")).setNumber(0);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);

for(gdjs.Starting_95ArenaCode.forEachIndex2 = 0;gdjs.Starting_95ArenaCode.forEachIndex2 < gdjs.Starting_95ArenaCode.GDEnemyObjects1.length;++gdjs.Starting_95ArenaCode.forEachIndex2) {
gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2.length = 0;

gdjs.Starting_95ArenaCode.GDEnemyObjects2.length = 0;


gdjs.Starting_95ArenaCode.forEachTemporary2 = gdjs.Starting_95ArenaCode.GDEnemyObjects1[gdjs.Starting_95ArenaCode.forEachIndex2];
gdjs.Starting_95ArenaCode.GDEnemyObjects2.push(gdjs.Starting_95ArenaCode.forEachTemporary2);
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDHitPointBox_9595EnemyObjects2Objects, (( gdjs.Starting_95ArenaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDEnemyObjects2[0].getPointX("HitPoint")), (( gdjs.Starting_95ArenaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDEnemyObjects2[0].getPointY("HitPoint")), "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2.length !== 0 ? gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2[0] : null), (gdjs.Starting_95ArenaCode.GDEnemyObjects2.length !== 0 ? gdjs.Starting_95ArenaCode.GDEnemyObjects2[0] : null));
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2[i].setHeight(16);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2[i].setWidth(7);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);

for(gdjs.Starting_95ArenaCode.forEachIndex2 = 0;gdjs.Starting_95ArenaCode.forEachIndex2 < gdjs.Starting_95ArenaCode.GDEnemyObjects1.length;++gdjs.Starting_95ArenaCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("HitPointBox_Enemy"), gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2);
gdjs.Starting_95ArenaCode.GDEnemyObjects2.length = 0;


gdjs.Starting_95ArenaCode.forEachTemporary2 = gdjs.Starting_95ArenaCode.GDEnemyObjects1[gdjs.Starting_95ArenaCode.forEachIndex2];
gdjs.Starting_95ArenaCode.GDEnemyObjects2.push(gdjs.Starting_95ArenaCode.forEachTemporary2);
if (true) {
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDHitPointBox_9595EnemyObjects2Objects, (gdjs.Starting_95ArenaCode.GDEnemyObjects2.length !== 0 ? gdjs.Starting_95ArenaCode.GDEnemyObjects2[0] : null));
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2[i].setPosition((( gdjs.Starting_95ArenaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDEnemyObjects2[0].getPointX("HitPoint")),(( gdjs.Starting_95ArenaCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDEnemyObjects2[0].getPointY("HitPoint")));
}
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].addForceTowardPosition((( gdjs.Starting_95ArenaCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.Starting_95ArenaCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Starting_95ArenaCode.GDPlayerObjects1[0].getPointY("")), 10, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects, 20, false);
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].returnVariable(gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects, 20, true);
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.turnedTowardTest(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects, 180, false);
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.turnedTowardTest(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects, 180, true);
}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitPointBox_Enemy"), gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition2IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].getVariableNumber(gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDEnemyObjects1[k] = gdjs.Starting_95ArenaCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDEnemyObjects1.length = k;}if ( gdjs.Starting_95ArenaCode.condition0IsTrue_0.val ) {
{
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDHitPointBox_9595EnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Starting_95ArenaCode.condition1IsTrue_0.val ) {
{
{gdjs.Starting_95ArenaCode.conditionTrue_1 = gdjs.Starting_95ArenaCode.condition2IsTrue_0;
gdjs.Starting_95ArenaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7907572);
}
}if ( gdjs.Starting_95ArenaCode.condition2IsTrue_0.val ) {
{
gdjs.Starting_95ArenaCode.condition3IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects, 20, false);
}}
}
}
if (gdjs.Starting_95ArenaCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDEnemyObjects1 */
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].setColor("255;0;0");
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].returnVariable(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().get("Health")).sub(gdjs.randomInRange(1, 10));
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].returnVariable(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].getAnimation() == 1 ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDEnemyObjects1[k] = gdjs.Starting_95ArenaCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDEnemyObjects1.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].clearForces();
}
}}

}


};

gdjs.Starting_95ArenaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDHitPointBox_95EnemyObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDPlayerObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDPlayerObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDSpectatorObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDSpectatorObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDSpectatorObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDEnemyObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDEnemyObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDEnemyObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalTopObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalTopObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalTopObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDFloorTile_95StairsObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDFloorTile_95StairsObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDFloorTile_95StairsObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDWall_95Back_95BrickSandObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDWall_95Back_95BrickSandObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDWall_95Back_95BrickSandObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDKillCounterObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDKillCounterObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDKillCounterObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDHealthObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDHealthObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDHealthObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDStatusObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDStatusObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDStatusObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDHealth_95Status_95BackObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDHealth_95Status_95BackObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDHealth_95Status_95BackObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDHealth_95StatusObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDHealth_95StatusObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDHealth_95StatusObjects3.length = 0;

gdjs.Starting_95ArenaCode.eventsList8(runtimeScene);
return;

}

gdjs['Starting_95ArenaCode'] = gdjs.Starting_95ArenaCode;
