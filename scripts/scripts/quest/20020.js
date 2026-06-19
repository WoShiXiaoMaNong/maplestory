/*
	NPC Name: 		Nineheart
	Description: 		Quest - Cygnus movie Intro
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
		qm.sendNext("看到你已经达到了10级，我就知道你这段时间有多努力。我想现在是时候让你告别“贵族”身份，正式成为一名“修炼骑士”了。不过在这之前，我想问你一件事：你决定好要成为哪一种骑士了吗？");
	} else if (status == 1) {
		qm.sendNext("成为骑士的道路并不是只有一条。事实上，有五条截然不同的道路摆在你的面前。选择哪条路完全取决于你，但请务必选择一条绝不会让自己后悔的路。正因如此……我提议让你提前预览一下，当你真正成为骑士后会是什么帅气的模样。");
	} else if (status == 2) {
		qm.sendNext("你觉得怎么样？有兴趣看看自己成为骑士团长时的样子吗？如果你早就已经想好了要当哪种骑士，那不看也无所谓……\r\n#b#L0#让我看看我成为骑士团长时的样子。#l\r\n#b#L1#不用了，谢谢。#l");
	} else if (status == 3) {
		qm.sendYesNo("你现在想亲眼见识一下吗？接下来会播放一段简短的动画，请做好心理准备，见证你未来的高光时刻。");
    // IF selected no
    //Talk to me after you have decided what you really want to do. Whatever you choose, you will not miss out or lose privileges, so don't take this too seriously...
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.playerSummonHint(false);
	qm.MovieClipIntroUI(true);
	qm.warp(913040100, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	qm.sendNextPrev("Test");
	qm.dispose();
    }
}