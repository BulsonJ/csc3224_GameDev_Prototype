gdjs.Starting_95ArenaCode = {};
gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1= [];
gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects2= [];
gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects3= [];
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1= [];
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects2= [];
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects3= [];
gdjs.Starting_95ArenaCode.GDPlayerObjects1= [];
gdjs.Starting_95ArenaCode.GDPlayerObjects2= [];
gdjs.Starting_95ArenaCode.GDPlayerObjects3= [];
gdjs.Starting_95ArenaCode.GDEnemyObjects1= [];
gdjs.Starting_95ArenaCode.GDEnemyObjects2= [];
gdjs.Starting_95ArenaCode.GDEnemyObjects3= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects2= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects3= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects1= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects2= [];
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects3= [];
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects1= [];
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects2= [];
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects3= [];
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1= [];
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects2= [];
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects3= [];

gdjs.Starting_95ArenaCode.conditionTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition0IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition1IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition2IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition3IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.condition4IsTrue_0 = {val:false};
gdjs.Starting_95ArenaCode.conditionTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition0IsTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition1IsTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition2IsTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition3IsTrue_1 = {val:false};
gdjs.Starting_95ArenaCode.condition4IsTrue_1 = {val:false};


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


};gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Starting_95ArenaCode.GDPlayerObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDCollision_9595BoundaryObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595VerticalObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595HorizontalObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Collision_Boundary": gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1, "WallTiled_Vertical": gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1, "WallTiled_Horizontal": gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects1, "Enemy": gdjs.Starting_95ArenaCode.GDEnemyObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDCollision_9595BoundaryObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595VerticalObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595HorizontalObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Collision_Boundary": gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1, "WallTiled_Vertical": gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1, "WallTiled_Horizontal": gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects1, "Enemy": gdjs.Starting_95ArenaCode.GDEnemyObjects1});gdjs.Starting_95ArenaCode.eventsList2 = function(runtimeScene) {

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


};gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDHitPointBoxObjects1Objects = Hashtable.newFrom({"HitPointBox": gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1});gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Starting_95ArenaCode.GDEnemyObjects1});gdjs.Starting_95ArenaCode.eventsList3 = function(runtimeScene) {

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
gdjs.Starting_95ArenaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7342004);
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
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1[i].setAnimation(0);
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
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1[i].setOpacity(255);
}
for(var i = 0, len = gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1[i].setOpacity(255);
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



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.Starting_95ArenaCode.GDPlayerObjects1.length !== 0 ? gdjs.Starting_95ArenaCode.GDPlayerObjects1[0] : null), 0, 0, 640, 360, true, "", 0);
}
{ //Subevents
gdjs.Starting_95ArenaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Collision_Boundary"), gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Starting_95ArenaCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Starting_95ArenaCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallTiled_Horizontal"), gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallTiled_Vertical"), gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1);

gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = false;
gdjs.Starting_95ArenaCode.condition1IsTrue_0.val = false;
{
gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDPlayerObjects1Objects, gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDCollision_9595BoundaryObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595VerticalObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595HorizontalObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
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
/* Reuse gdjs.Starting_95ArenaCode.GDEnemyObjects1 */
/* Reuse gdjs.Starting_95ArenaCode.GDPlayerObjects1 */
/* Reuse gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects1 */
/* Reuse gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Starting_95ArenaCode.mapOfGDgdjs_46Starting_9595ArenaCode_46GDCollision_9595BoundaryObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595VerticalObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDWallTiled_9595HorizontalObjects1ObjectsGDgdjs_46Starting_9595ArenaCode_46GDEnemyObjects1Objects, false);
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
{
for(var i = 0, k = 0, l = gdjs.Starting_95ArenaCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Starting_95ArenaCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Starting_95ArenaCode.condition0IsTrue_0.val = true;
        gdjs.Starting_95ArenaCode.GDPlayerObjects1[k] = gdjs.Starting_95ArenaCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = k;}if (gdjs.Starting_95ArenaCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Starting_95ArenaCode.eventsList2(runtimeScene);} //End of subevents
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
gdjs.Starting_95ArenaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7760020);
}
}}
}
if (gdjs.Starting_95ArenaCode.condition2IsTrue_0.val) {
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
}}

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
{gdjs.Starting_95ArenaCode.conditionTrue_1 = gdjs.Starting_95ArenaCode.condition3IsTrue_0;
gdjs.Starting_95ArenaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7373172);
}
}}
}
}
if (gdjs.Starting_95ArenaCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Starting_95ArenaCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Starting_95ArenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Starting_95ArenaCode.GDEnemyObjects1[i].setAnimation(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


};

gdjs.Starting_95ArenaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDCollision_95BoundaryObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDHitPointBoxObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDPlayerObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDPlayerObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDPlayerObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDEnemyObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDEnemyObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDEnemyObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95VerticalObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDWallTiled_95HorizontalObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDFloorTile_95SandObjects3.length = 0;
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects1.length = 0;
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects2.length = 0;
gdjs.Starting_95ArenaCode.GDButton_95DebugObjects3.length = 0;

gdjs.Starting_95ArenaCode.eventsList3(runtimeScene);
return;

}

gdjs['Starting_95ArenaCode'] = gdjs.Starting_95ArenaCode;
