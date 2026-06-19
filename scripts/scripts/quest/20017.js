/*
	NPC Name: 		Cygnus
	Description: 		Quest - Encounter with the Young Queen
*/

var status = -1;

function start(mode, type, selection) {
     if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("嗯，没什么好担心的。对于你这个级别的冒险家来说，这简直轻而易举。拿出你的勇气，准备好了就告诉我。");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("嗯？是 #p1101002# 派你来的吧？你一定就是最近刚加入皇家骑士团的新人。欢迎你，很高兴认识你！我的名字叫 #p1102000#。我是负责训练所有像你一样的“贵族”新人的训练教官。当然，如你所见，我并不是人类。");
    } else if (status == 1) {
	qm.sendNextPrev("我们被称为“皮?”（提诺一族）。你见过一直待在女皇身边的 #p1101001# 吧？我们和 #p1101001# 属于同一种族，但我们分属不同的类型。当然，你以前肯定没见过我们，因为我们只生活在圣地。你很快就会习惯和我们相处的。");
    } else if (status == 2) {
	qm.sendNextPrev("噢，对了，你知道圣地是没有怪物的吗？哪怕是一丁点儿的邪恶势力都不敢踏入圣地。不过不用担心，你可以利用由 #p1101001# 创造出来的幻象怪物——也就是“提提”来进行训练。");
    } else if (status == 3) {
	qm.askAcceptDecline("你看起来已经准备好了！看看你之前取得的成果，我想你应该直接开始挑战更高级的“提提”了。去 #m130010100##k 狩猎 #b15只 #r#o100122##k 怎么样？利用左侧的传送门就可以到达 #b修炼之林 II#k。");
    } else if (status == 4) {
	qm.summonMsg(12);
	qm.forceStartQuest(20020);
	qm.forceCompleteQuest(20100);
	qm.forceStartQuest();
	qm.dispose();
    }
}

function end(mode, type, selection) {
}
