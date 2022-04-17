// -----JS CODE-----

global.confirm = false;

var event = script.createEvent("TouchStartEvent");
event.bind(function(eventData)
{
    if (!global.tweening)
    {
        global.confirm = true;
    }
});
