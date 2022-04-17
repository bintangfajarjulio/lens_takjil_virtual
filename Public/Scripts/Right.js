// -----JS CODE-----

global.right = false;

var event = script.createEvent("TouchStartEvent");
event.bind(function(eventData)
{
    global.right = true;
});