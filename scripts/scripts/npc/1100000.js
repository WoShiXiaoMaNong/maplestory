/* 
   NPC ID: 1100000
   NPC 名称：奇里乌 (Kiridu)
   所在地图：圣地 (Ereve)
   功能：皇家骑士团专属 - 账号共享仓库看守员
*/

var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        // ? 1. 弹出标准的国服官服仓库看守对话
        cm.sendSimple("我是圣地的仓库看守员奇里乌。你想把冒险中得到的珍贵装备或金币寄存在我这里吗？同一账号下的所有皇家骑士团角色都可以互相取用哦。\r\n#b#L0#我想打开我的账号共享仓库#l\r\n#L1#离开#l");
    } else if (status == 1) {
        if (selection == 0) {
            // ? 2. 【核心核心】调用服务端标准的打开仓库方法
            // 在 OdinMS 派系端中，cm.openStorage() 会直接拉起你在数据库中关联该账号的仓库界面！
            cm.sendStorage();
            cm.dispose();
        } else {
            cm.sendOk("愿神兽的光芒永远庇护着你，年轻的骑士。");
            cm.dispose();
        }
    }
}
