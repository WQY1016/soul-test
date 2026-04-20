const questions = [
    "1. 上课老师讲代码知识点，你第一状态？",
    "2. 写代码出现 bug 调试不出来，你心态？",
    "3. 宿舍团建聚餐你一般？",
    "4. 小组做课程设计项目分工时？",
    "5. 别人看不懂你的代码注释时？",
    "6. 早八专业课你起床状态？",
    "7. 期末复习的状态？",
    "8. 电脑蓝屏、程序崩溃死机你会？",
    "9. 遇到难懂晦涩计算机专业课？",
    "10. 熬夜赶项目、赶实验报告？",
    "11. 机房上机课自由时间你？",
    "12. 电脑桌面壁纸是什么风格？",
    "13. 室友打游戏、敲代码吵到你？",
    "14. 代码一次运行成功了你？",
    "15. 如果给你一项编程超能力？"
];

const options = [
    ["A 疯狂接梗互动，全程活跃气氛", "B 认真听懂，温柔配合课堂", "C 默默听讲，很少主动发言", "D 独自神游，懒得参与交流"],
    ["A 疯狂吐槽整活，喊室友一起找乐子", "B 耐心慢慢排查，平稳解决问题", "C 焦虑纠结，越调越心烦", "D 佛系摆烂，随缘运行随缘报错"],
    ["A 全场最嗨，带动所有话题", "B 温柔聊天，安静陪伴大家", "C 坐在角落，偶尔搭几句话", "D 能不去就不去，喜欢独处"],
    ["A 主动带头，包揽大部分活跃工作", "B 认真负责，乖乖做好自己模块", "C 配合安排，不主动不拒绝", "D 佛系躺平，少分配任务就行"],
    ["A 搞笑吐槽对方菜，耐心调侃讲解", "B 细心温柔，一步步解释清楚", "C 简单说明，不想过多啰嗦", "D 懒得解释，自己看懂就行"],
    ["A 元气满满，还能顺便逗室友", "B 按时起床，安稳去上课", "C 艰难爬起，昏昏沉沉上课", "D 卡点逃课，宿舍安静躺平"],
    ["A 边玩边学，轻松搞笑复习", "B 稳步刷题，踏实认真备考", "C 临时抱佛脚，慌张突击", "D 随缘裸考，听天由命不内卷"],
    ["A 疯狂发朋友圈吐槽整活", "B 冷静重启，慢慢修复问题", "C 有点烦躁，手足无措", "D 面无表情，早已习惯麻木"],
    ["A 幽默吐槽，全班一起摆烂", "B 慢慢钻研，不懂就问同学", "C 默默自学，很少求助他人", "D 直接放弃，上课安静发呆"],
    ["A 边熬夜边打闹，欢乐肝作业", "B 安静熬夜，有条不紊完成", "C 疲惫烦躁，硬撑着做完", "D 拖到最后，干脆不交也行"],
    ["A 和周围同学打闹玩梗摸鱼", "B 认真敲代码，安静练习", "C 发呆放空，偶尔敲两行", "D 独自戴耳机，不和任何人交流"],
    ["A 搞笑沙雕表情包、趣味壁纸", "B 简约温柔风景干净壁纸", "C 低调小众冷淡壁纸", "D 纯黑极简，高冷禁欲系"],
    ["A 开玩笑互怼，轻松化解", "B 温柔提醒，互相包容", "C 默默忍受，不好意思说", "D 冷漠疏远，互不打扰"],
    ["A 狂喜大叫，全宿舍炫耀", "B 淡淡开心，继续写下一段", "C 暗自庆幸，悄悄放松", "D 毫无波澜，正常操作而已"],
    ["A 一键写满所有代码，快乐摸鱼", "B 代码零 bug，安稳顺利毕业", "C 安安静静自学，不被内卷打扰", "D 永久不用敲代码，高冷躺平"]
];

const students = [
    "卢畅","魏有涛","蒋宇聪","黄梦馨月","张阳",
    "刘慧","孙欢妮",
    "马紫轩","刘玉娇","钟阳","余欣玉",
    "余洪洋","何龙翔",
    "万淇颖","胡若雪","袁佳美","谢文宇","王劲涛",
    "何燕娟","李永旗",
    "姜敏","陈曾芹","马钰欣","吴琦瀚",
    "李宇蕾","柴泽平","郑嘉豪",
    "龙云升",
    "罗宇曦","郑乐进",
    "徐一帆","陈子扬","肖思成","王俞翔",
    "邱锦鸿","宋家欣","汤丽平","金晓乐","王逸飞","邓希骏","汪文乐","吴天昊","廖啟建","黄金城"
];

// 刚好44条，一一对应分数性格
const soulInfo = [
    {code:"码圈活宝",desc:"机房永远热闹，快乐从不掉线"},
    {code:"Bug 乐子人",desc:"报错也能整活，心态永远在线"},
    {code:"联机社牛",desc:"组队做项目，全场气氛担当"},
    {code:"早八显眼包",desc:"再困专业课，依旧元气满满"},
    {code:"算法玩咖",desc:"枯燥代码，也能玩出趣味花样"},
    {code:"熬夜乐仔",desc:"肝实验赶项目，熬夜也很开心"},
    {code:"代码开心果",desc:"社交百搭，人缘全程爆满"},
    {code:"上机趣友",desc:"上机课不沉闷，有趣又靠谱"},
    {code:"程序顽童",desc:"随性敲代码，自在又鲜活"},
    {code:"组队暖咖",desc:"不内卷不内耗，快乐一起进步"},
    {code:"网梗达人",desc:"懂所有计算机热梗，聊天不冷场"},
    {code:"码圈活宝",desc:"机房永远热闹，快乐从不掉线"},
    {code:"软序码友",desc:"代码干净温柔，待人温和舒服"},
    {code:"漏洞暖阳",desc:"耐心帮人排错，治愈所有烦恼"},
    {code:"兼容队友",desc:"小组合作默契，从不甩锅扯皮"},
    {code:"机房柔客",desc:"安静细心，默默帮身边人解惑"},
    {code:"稳序人生",desc:"处事不急不躁，生活平稳运行"},
    {code:"代码良匠",desc:"细细打磨程序，温柔且有力量"},
    {code:"早八伴友",desc:"安稳上课，温柔陪伴身边伙伴"},
    {code:"百搭知己",desc:"性格随和，和谁都相处融洽"},
    {code:"缓思解题",desc:"慢慢钻研算法，从容应对难题"},
    {code:"宿舍调和",desc:"温柔化解矛盾，相处舒适自在"},
    {code:"零错行者",desc:"少烦恼少 bug，万事温柔顺遂"},
    {code:"静默码手",desc:"话不多，编程思路格外通透"},
    {code:"独处猎手",desc:"独自静心，悄悄解决所有 bug"},
    {code:"低调潜神",desc:"默默自学变强，从不刻意炫耀"},
    {code:"机房独行者",desc:"安静敲代码，自有专属节奏"},
    {code:"细思匠人",desc:"心思缜密，逻辑思维超强"},
    {code:"慢热码客",desc:"生人安静，熟人格外真诚靠谱"},
    {code:"沉心备考",desc:"安静复习，不内卷不浮躁"},
    {code:"心事序章",desc:"情绪藏于心，专注专业成长"},
    {code:"静思程序员",desc:"不爱热闹，只专注提升自己"},
    {code:"小众逻辑鬼",desc:"想法独特，计算机天赋出众"},
    {code:"内核定心",desc:"内心稳定强大，像程序内核可靠"},
    {code:"冷序大神",desc:"话少高冷，代码实力碾压全场"},
    {code:"独立终端",desc:"不依附他人，独自搞定项目"},
    {code:"报错佛系",desc:"程序频繁崩溃，依旧波澜不惊"},
    {code:"机房隐士",desc:"偏爱独处，专心深耕技术"},
    {code:"极简内核",desc:"清冷寡言，做事高效干脆"},
    {code:"淡世躺客",desc:"远离内卷纷争，安稳顺利毕业"},
    {code:"寡言大佬",desc:"少说话，一开口全是干货"},
    {code:"静音码王",desc:"戴耳机独处，代码极少出错"},
    {code:"疏离行者",desc:"看淡无效社交，专注自身成长"},
    {code:"冷感主控",desc:"情绪极度稳定，从容面对难题"},
    {code:"孤简码者",desc:"不喜热闹社交，只忠于代码自己"}
];

let currentQuestion = 0;
let answers = Array(15).fill(null);

document.getElementById("startBtn").onclick = function() {
    document.getElementById("homePage").classList.add("hide");
    document.getElementById("testPage").classList.remove("hide");
    renderQuestion();
};

function renderQuestion() {
    const card = document.getElementById("questionCard");
    const q = questions[currentQuestion];
    const optList = options[currentQuestion];

    let html = `
        <div class="question-card">
            <div class="question-title">${q}</div>
            <div class="options">
    `;

    optList.forEach((opt, idx) => {
        const active = answers[currentQuestion] === idx ? "selected" : "";
        html += `<div class="option ${active}" data-ans="${idx}">${opt}</div>`;
    });

    html += `</div></div>`;
    card.innerHTML = html;

    document.querySelectorAll(".option").forEach(opt => {
        opt.onclick = function() {
            this.parentElement.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
            this.classList.add("selected");
            answers[currentQuestion] = parseInt(this.dataset.ans);

            setTimeout(() => {
                if(currentQuestion < 14) {
                    currentQuestion++;
                    document.getElementById("nowNum").innerText = currentQuestion + 1;
                    renderQuestion();
                } else {
                    document.getElementById("showResultBtn").classList.remove("hide");
                }
            }, 300);
        }
    });
}

document.getElementById("showResultBtn").onclick = function() {
    let total = 0;
    answers.forEach(v=>total+=v);

    // 修复循环BUG：0~45分 完美对应0~43序号，高分绝不绕回前面
    let soulIndex = Math.floor(total * 44 / 45);
    soulIndex = Math.min(soulIndex, 43);

    const soulPerson = students[soulIndex];
    const info = soulInfo[soulIndex];

    document.getElementById("testPage").classList.add("hide");
    const resultPage = document.getElementById("resultPage");
    resultPage.classList.remove("hide");

    resultPage.innerHTML = `
        <h2>✨ 你的灵魂镜像已匹配成功 ✨</h2>
        <p class="match-tip">灵魂契合 · 专属配对</p>
        <div class="soul-name">${soulPerson}</div>
        <div class="soul-code">${info.code}</div>
        <p class="soul-desc">${info.desc}</p>
        <button id="resetBtn">重置灵魂，再次校准</button>
    `;

    document.getElementById("resetBtn").onclick = function(){
        answers = Array(15).fill(null);
        currentQuestion = 0;
        document.getElementById("resultPage").classList.add("hide");
        document.getElementById("testPage").classList.add("hide");
        document.getElementById("homePage").classList.remove("hide");
    };
};