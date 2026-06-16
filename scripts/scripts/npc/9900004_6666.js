/* 
   吃货冒险岛 - 新人豪华大礼包发放脚本
   功能：扣除箱子，获得金币、超级药水、美发券，并随机获得红/蓝/绿笔笔名片戒指中的一枚。
*/

var status;
// ? 定义三种笔笔名片戒指的 ID 数组（红：1112124，蓝：1112125，绿：1112126）
var ringIds = [1112123, 1112124, 1112125];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        // 如果在第一个菜单页面选择了“否”或点击了退出
        if (status >= 0 && mode == 0) {
            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        // 处理菜单状态的前进与后退
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            var text = "";
            text += "#L1##r点我领取:豪华新人大礼包#l\r\n\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            // 二次判断是否存在神秘箱子（新手礼包箱子）
            if (cm.haveItem(2022336, 1)) {
                // 1. 扣除神秘箱子
                cm.gainItem(2022336, -1);
                
                // 2. 发放基础礼包奖励（金币、超级药水1000瓶、超级美发券）
                cm.gainMeso(20000);
                cm.gainItem(2000005, 100); // 超级药水1000瓶
                cm.gainItem(5150038, 1, 72); 
                
                // 3. ? 核心随机算法：从 0, 1, 2 中随机抽取一个索引
                var randomIndex = Math.floor(Math.random() * ringIds.length);
                var rewardRingId = ringIds[randomIndex];
                
                // 4. 发放随机抽中的笔笔名片戒指
                cm.gainItem(rewardRingId, 1);
                
                // 5. 对话反馈与全服全频道大喇叭广播
                cm.sendOk("领取成功！你额外获得了一枚随机的笔笔名片戒指！");		
                cm.喇叭(5, "玩家：[" + cm.getName() + "]领取了吃货冒险岛新人大礼包一份！");
                cm.dispose();
            } else {
                cm.sendOk("礼包呢？哪去了？你没礼包箱子你是怎么打开的？！");
                cm.dispose();
            }
        }
    }
}
