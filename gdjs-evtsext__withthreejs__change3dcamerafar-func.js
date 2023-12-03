
if (typeof gdjs.evtsExt__WithThreeJS__Change3DCameraFar !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Change3DCameraFar.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Change3DCameraFar = {};


gdjs.evtsExt__WithThreeJS__Change3DCameraFar.userFunc0xdb0630 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
// const Camera = gdjs.__WithThreeJS.get("Camera");
const Id = eventsFunctionContext.getArgument("Id");
const Camera = gdjs.__WithThreeJS.get("GetCamera")(Id);
const Operator = eventsFunctionContext.getArgument("Operator");
const Far = eventsFunctionContext.getArgument("Far");
//
if (Operator == "=") {
    Camera.far = Far;
} else if (Operator == "+") {
    Camera.far += Far;
} else if (Operator == "-") {
    Camera.far -= Far;
}
Camera.updateProjectionMatrix();


};
gdjs.evtsExt__WithThreeJS__Change3DCameraFar.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Change3DCameraFar.userFunc0xdb0630(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Change3DCameraFar.func = function(runtimeScene, Id, Operator, Far, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Id") return Id;
if (argName === "Operator") return Operator;
if (argName === "Far") return Far;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Change3DCameraFar.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Change3DCameraFar.registeredGdjsCallbacks = [];