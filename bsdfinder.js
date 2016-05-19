'use strict';
console.log('Loading event');

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    var bsd = event.bsd;
    if (bsd === undefined) { context.fail("No such BSD"); }
    if (bsd === 'net') { context.succeed({code:302,"location":"http://www.netbsd.org"}); }
    if (bsd === 'open') { context.succeed({code:302,"location":"http://www.openbsd.org"}); }
    if (bsd === 'free') { context.succeed({code:302,"location":"http://www.freebsd.org"}); }
	context.fail("No such BSD: " + bsd);
};