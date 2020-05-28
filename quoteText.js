/*
 *  MrK in 2020
 */
'use strict';


var updatedStartOrigin = false;
export function update(value) {
	if(shared.quoteSettings == null)
		return;
	if(thisLayer.visible === false || shared.quoteSettings.isVisible === false){
		thisLayer.visible = false;
		return;
	}
	if(thisLayer.text === "" || thisLayer.text == null){
		if(shared.quoteSettings['quote_author'] == null)
			return;
		thisLayer.text = shared.quoteSettings['quote_author'];
	}
	if(updatedStartOrigin === false){
		thisLayer.origin = new Vec3(Math.abs(shared.quoteSettings.xOrigin + shared.quoteSettings.xSize - thisLayer.size.x), (shared.quoteSettings.yOrigin - shared.						quoteSettings.ySize), thisLayer.origin.z);
		updatedStartOrigin = true;
	}
	thisLayer.origin = thisLayer.origin.subtract(new Vec3(0.2, 0, 0));
	return value;
}
