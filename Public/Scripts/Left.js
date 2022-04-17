// -----JS CODE-----

global.left = false;

var event = script.createEvent("TouchStartEvent");
event.bind(function(eventData)
{
    global.left = true;
});