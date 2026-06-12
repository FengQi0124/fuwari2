import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 模板默认侧边栏和导航栏两个都显示
	// 1. 侧边栏：在sidebarConfig.ts侧边栏配置把音乐组件enable设为false禁用即可
	// 2. 导航栏：在本配置文件把showInNavbar设为false禁用即可

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "meting",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "18050697746",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
    playlist: [
        {
            name: "别让我担心",
            artist: "多多poi",
            url: "/assets/music/别让我担心-多多poi.mp3",
            cover: "",
            lrc: "/assets/music/lrc/别让我担心-多多poi.lrc",
        },
        {
            name: "我不曾忘记",
            artist: "花玲 / 张安琪 / 沐霏",
            url: "/assets/music/我不曾忘记-花玲&张安琪&沐霏.mp3",
            cover: "",
            lrc: "/assets/music/lrc/我不曾忘记-花玲&张安琪&沐霏.lrc",
        },
        {
            name: "DAMIDAMI",
            artist: "Sihan / 三Z-STUDIO / HOYO-MiX",
            url: "/assets/music/DAMIDAMI-Sihan&三Z-STUDIO&HOYO-MiX.mp3",
            cover: "",
            lrc: "/assets/music/lrc/DAMIDAMI-Sihan&三Z-STUDIO&HOYO-MiX.lrc",
        },
        {
            name: "Moon Halo",
            artist: "茶理理理子 / TetraCalyx / hanser / HOYO-MiX",
            url: "/assets/music/Moon Halo-茶理理理子&TetraCalyx&hanser&HOYO-MiX.mp3",
            cover: "",
            lrc: "/assets/music/lrc/Moon Halo-茶理理理子&TetraCalyx&hanser&HOYO-MiX.lrc",
        },
        {
            name: "Ripples of Past Reverie",
            artist: "Cassie Wei / HOYO-MiX",
            url: "/assets/music/Ripples of Past Reverie-Cassie Wei&HOYO-MiX.mp3",
            cover: "",
            lrc: "/assets/music/lrc/Ripples of Past Reverie-Cassie Wei&HOYO-MiX.lrc",
        },
        {
            name: "Rubia",
            artist: "周深",
            url: "/assets/music/Rubia-周深.mp3",
            cover: "",
            lrc: "/assets/music/lrc/Rubia-周深.lrc",
        },
    ],
},
};
