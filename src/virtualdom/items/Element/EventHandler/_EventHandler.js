import bubble from 'virtualdom/items/shared/EventHandler/prototype/bubble';
import fire from 'virtualdom/items/shared/EventHandler/prototype/fire';
import getAction from 'virtualdom/items/shared/EventHandler/prototype/getAction';
import init from 'virtualdom/items/shared/EventHandler/prototype/init';
import rebind from 'virtualdom/items/shared/EventHandler/prototype/rebind';
import render from 'virtualdom/items/shared/EventHandler/prototype/render';
import teardown from 'virtualdom/items/shared/EventHandler/prototype/teardown';
import unrender from 'virtualdom/items/shared/EventHandler/prototype/unrender';


import listen from 'virtualdom/items/Element/EventHandler/prototype/listen';

var EventHandler = function ( element, name, template ) {
	this.element = element;
	this.init( element.root, name, template );
};

EventHandler.prototype = {
	bubble: bubble,
	fire: fire,
	getAction: getAction,
	init: init,
	listen: listen,
	rebind: rebind,
	render: render,
	teardown: teardown,
	unrender: unrender
};

export default EventHandler;
