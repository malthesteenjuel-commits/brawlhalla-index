let activeFilters = [];
const defaultLegends = [
    { 
        id: 1, 
        name: "Bödvar", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/bodvar.png",
        weapons: ["Hammer", "Sword"], 
        stats: { str: 6, dex: 6, def: 5, spd: 5 }, 
        tags: ["Hammer", "Sword", "Fangwold", "BCX 2v2 Winner", "'Bot' Bot", "BCX 1v1 Winner", "didn't read", "In Alpha", "Saw Dragon" ] 
    },
    { 
        id: 2, 
        name: "Cassidy", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/cassidy.png",
        weapons: ["Blasters", "Hammer"], 
        stats: { str: 6, dex: 8, def: 4, spd: 4 }, 
        tags: ["Blasters", "Hammer", "Pet Owner", "BCX 2v2 Winner", "'Bot' Bot", "Lin Fei Trained", "In Alpha", "Hat Wearer" ] 
    },
    { 
        id: 3, 
        name: "Orion", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/orion.png",
        weapons: ["Rocket Lance", "Spear"], 
        stats: { str: 4, dex: 6, def: 6, spd: 6 }, 
        tags: ["Rocket Lance", "Spear", "Asgardian", "Outer Space", "In Alpha", "25 BCX 1v1 Top 8", "Hat Wearer"] 
    },
    { 
        id: 4, 
        name: "Lord Vraxx", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_VraxxM-1.png",
        weapons: ["Rocket Lance", "Blasters"], 
        stats: { str: 4, dex: 8, def: 4, spd: 6 }, 
        tags: ["Rocket Lance", "Blasters", "Brynn Chosen", "Outer Space", "In Alpha"] 
    },
    { 
        id: 5, 
        name: "Gnash", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/gnash.png",
        weapons: ["Hammer", "Spear"], 
        stats: { str: 7, dex: 3, def: 5, spd: 7 }, 
        tags: ["Hammer", "Spear","Thera", "Didn't Read", "In Alpha", "In Alpha"] 
    },
    { 
        id: 6, 
        name: "Queen Nai", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/nai.png",
        weapons: ["Spear", "Katars"], 
        stats: { str: 7, dex: 4, def: 8, spd: 3 }, 
        tags: ["Spear", "Katars", "Magic User", "In Alpha", "Hat Wearer"] 
    },
    { 
        id: 7, 
        name: "Hattori", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/hattori.png",
        weapons: ["Sword", "Spear"], 
        stats: { str: 4, dex: 6, def: 4, spd: 8 }, 
        tags: ["Sword", "Spear", "BCX 2v2 Winner", "'Bot' Bot", "In Alpha"]
    },
    { 
        id: 8, 
        name: "Sir Roland", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/roland.png",
        weapons: ["Rocket Lance", "Sword"], 
        stats: { str: 5, dex: 5, def: 8, spd: 4 }, 
        tags: ["Rocket Lance", "Sword", "Pet Owner", "Exalted Lion", "'Bot' Bot", "Lin Fei Trained", "Saw Dragon"] 
    },
    { 
        id: 9, 
        name: "Scarlet", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/scarlet.png",
        weapons: ["Hammer", "Rocket Lance"], 
        stats: { str: 8, dex: 5, def: 5, spd: 4 }, 
        tags: ["Hammer", "Rocket Lance", "Book Club", "'Bot' Bot"] 
    },
    { 
        id: 10, 
        name: "Thatch", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/thatch.png",
        weapons: ["Sword", "Blasters"], 
        stats: { str: 7, dex: 5, def: 3, spd: 7 }, 
        tags: ["Sword", "Blasters", "Pet Owner", "Lin Fei Trained", "Thera", "In Alpha", "Hat Wearer"] 
    },
    { 
        id: 11, 
        name: "Ada", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/ada.png",
        weapons: ["Blasters", "Spear"], 
        stats: { str: 6, dex: 7, def: 3, spd: 6 }, 
        tags: ["Blasters", "Spear", "Euro Pop"] 
    },
    { 
        id: 12, 
        name: "Sentinel", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/sentinel.png",
        weapons: ["Hammer", "Katars"], 
        stats: { str: 5, dex: 4, def: 7, spd: 6 }, 
        tags: ["Hammer", "Katars", "'Bot' Bot"] 
    },
    { 
        id: 13, 
        name: "Lucien", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/lucien.png",
        weapons: ["Katars", "Blasters"], 
        stats: { str: 3, dex: 5, def: 6, spd: 8 }, 
        tags: ["Katars", "Blasters", "BCX 1v1 Winner", "Batavia", "Hat Wearer"]
    },
    { 
        id: 14, 
        name: "Teros", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/teros.png",
        weapons: ["Axe", "Hammer"], 
        stats: { str: 8, dex: 3, def: 6, spd: 5 }, 
        tags: ["Axe", "Hammer", "Brynn Chosen", "Thera", "Fangwild", "BCX 2v2 Winner", "Didn't Read", "Semi-Human", "25 BCX 1v1 Top 8", "25 BCX 2v2 Top 6", "Saw Dragon"] 
    },
    { 
        id: 15, 
        name: "Brynn", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ValkyrieM.png",
        weapons: ["Axe", "Spear"], 
        stats: { str: 5, dex: 5, def: 5, spd: 7 }, 
        tags: ["Axe", "Spear", "Asgardian", "BCX 2v2 Winner", "BCX 1v1 Winner", "Pet Owner", "25 BCX 1v1 Top 8"] 
    },
    { 
        id: 16, 
        name: "Asuri", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CatM.png",
        weapons: ["Katars", "Sword"], 
        stats: { str: 4, dex: 7, def: 5, spd: 6 }, 
        tags: ["Katars", "Sword", "Brynn Chosen", "BCX 2v2 Winner", "Didn't Read", "Semi-Human"] 
    },
    { 
        id: 17, 
        name: "Barraza", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ApocM.png",
        weapons: ["Axe", "Blasters"], 
        stats: { str: 6, dex: 4, def: 8, spd: 4 }, 
        tags: ["Axe", "Blasters", "'Bot' Bot", "BCX 1v1 Winner"] 
    },
    { 
        id: 18, 
        name: "Ember",
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ElfM.png",
        weapons: ["Bow", "Katars"], 
        stats: { str: 6, dex: 6, def: 3, spd: 7 }, 
        tags: ["Bow", "Katars", "Fangwild", "Pet Owner", "'Bot' Bot", "Saw Dragon"]
    },
    { 
        id: 19, 
        name: "Azoth", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AzothM.png",
        weapons: ["Bow", "Axe"], 
        stats: { str: 7, dex: 5, def: 6, spd: 4 }, 
        tags: ["Bow", "Axe", "Thera", "Pet Owner", "Lin Fei Trained", "Magic User", "Hat Wearer"] 
    },
    { 
        id: 20, 
        name: "Koji", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SamuraiM.png",
        weapons: ["Bow", "Sword"], 
        stats: { str: 5, dex: 7, def: 4, spd: 5 }, 
        tags: ["Bow", "Sword", "BCX 1v1 Winner"] 
    },
    { 
        id: 21, 
        name: "Ulgrim", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DwarfM.png",
        weapons: ["Axe", "Rocket Lance"], 
        stats: { str: 6, dex: 3, def: 7, spd: 6 }, 
        tags: ["Axe", "Rocket Lance", "Asgardian", "Euro Pop", "BCX 2v2 Winner", "25 BCX 2v2 Top 6", "Saw Dragon"] 
    },
    { 
        id: 22, 
        name: "Diana", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MonsterHunterM.png",
        weapons: ["Bow", "Blasters"], 
        stats: { str: 5, dex: 6, def: 5, spd: 6 }, 
        tags: ["Bow", "Blasters", "Fangwild", "Exalted Lion", "BCX 2v2 Winner", "Batavia", "25 BCX 2v2 Top 6", "Hat Wearer"] 
    },
    { 
        id: 23, 
        name: "Jhala", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BarbarianM.png",
        weapons: ["Axe", "Sword"], 
        stats: { str: 7, dex: 7, def: 3, spd: 4 }, 
        tags: ["Axe", "Sword", "Thera", "Pet Owner", "Exalted Lion", "BCX 1v1 Winner", "Saw Dragon"] 
    },
    { 
        id: 24, 
        name: "Kor", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GolemM.png",
        weapons: ["gauntlets", "Hammer"], 
        stats: { str: 6, dex: 5, def: 7, spd: 4 }, 
        tags: ["Gauntlets", "Hammer", "Asgardian", "'Bot' Bot", "Hat Wearer"]
    },
    { 
        id: 25, 
        name: "Wu Shang", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MonkM.png",
        weapons: ["Gauntlets", "Spear"], 
        stats: { str: 5, dex: 7, def: 5, spd: 5 }, 
        tags: ["Gauntlets", "Spear", "Lin Fei Trained", "BCX 2v2 Winner", "25 BCX 1v1 Top 8"] 
    },
    { 
        id: 26, 
        name: "Val",
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ValM.png",
        weapons: ["Gauntlets", "Sword"], 
        stats: { str: 4, dex: 5, def: 6, spd: 7 }, 
        tags: ["Gauntlets", "Sword", "Brynn Chosen", "BCX 2v2 Winner"] 
    },
    { 
        id: 27, 
        name: "Ragnir", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DragonM.png",
        weapons: ["Katars", "Axe"], 
        stats: { str: 5, dex: 6, def: 6, spd: 5 }, 
        tags: ["Katars", "Axe", "Fangwild", "BCX 2v2 Winner", "'Bot' Bot", "Shapeshifter", "Saw Dragon"] 
    },
    { 
        id: 28, 
        name: "Cross", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CrossM.png",
        weapons: ["Blasters", "Gauntlets"], 
        stats: { str: 7, dex: 4, def: 6, spd: 5 }, 
        tags: ["Blasters", "Gauntlets", "BCX 2v2 Winner", "Hat Wearer"] 
    },
    { 
        id: 29, 
        name: "Mirage", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AssassinM.png",
        weapons: ["Scythe", "Spear"], 
        stats: { str: 7, dex: 6, def: 4, spd: 5 }, 
        tags: ["Scythe", "Spear", "Pet Owner", "Magic User", "BCX 1v1 Winner", "25 BCX 1v1 Top 8"] 
    },
    { 
        id: 30, 
        name: "Nix", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ReaperM.png",
        weapons: ["Scythe", "Blasters"], 
        stats: { str: 4, dex: 5, def: 7, spd: 6 }, 
        tags: ["Scythe", "Blasters", "'Bot' Bot", "Brynn Chosen"] 
    },
    { 
        id: 31, 
        name: "Mordex", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_WerewolfM.png",
        weapons: ["Scythe", "Gauntlets"], 
        stats: { str: 6, dex: 4, def: 5, spd: 7 }, 
        tags: ["Scythe", "Gauntlets", "Fangwild", "Exalted Lion", "BCX 1v1 Winner", "Batavia", "Shapeshifter", "Magic User", "Semi-Human", "25 BCX 1v1 Top 8"]
    },
    { 
        id: 32, 
        name: "Yumiko", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_KitsuneM.png",
        weapons: ["Bow", "Hammer"], 
        stats: { str: 4, dex: 7, def: 4, spd: 7 }, 
        tags: ["Bow", "Hammer", "Fangwild", "Shapeshifter", "Brynn Chosen", "Saw Dragon"] 
    },
    { 
        id: 33, 
        name: "Artemis", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpaceHunterM.png",
        weapons: ["Rocket Lance", "Scythe"], 
        stats: { str: 5, dex: 5, def: 4, spd: 8 }, 
        tags: ["Rocket Lance", "Scythe", "Outer Space"] 
    },
    { 
        id: 34, 
        name: "Caspian", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ThiefM.png",
        weapons: ["Gauntlets", "Katars"], 
        stats: { str: 7, dex: 5, def: 4, spd: 6 }, 
        tags: ["Gauntlets", "Katars", "Batavia"] 
    },
    { 
        id: 35, 
        name: "Sidra", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CorsairM.png",
        weapons: ["Cannon", "Sword"], 
        stats: { str: 6, dex: 4, def: 6, spd: 6 }, 
        tags: ["Cannon", "Sword", "Thera"] 
    },
    { 
        id: 36, 
        name: "Xull", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BruteM.png",
        weapons: ["Cannon", "Axe"], 
        stats: { str: 9, dex: 4, def: 5, spd: 4 }, 
        tags: ["Cannon", "Axe", "Thera", "Pet Owner", "BCX 2v2 Winner", "Didn't Read"] 
    },
    { 
        id: 37, 
        name: "Kaya", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_InuitM-1.png",
        weapons: ["Spear", "Bow"], 
        stats: { str: 4, dex: 4, def: 7, spd: 7 }, 
        tags: ["Spear", "Bow", "Pet Owner", "BCX 1v1 Winner", "BCX 2v2 Winner", "25 BCX 2v2 Top 6"]
    },
    { 
        id: 38, 
        name: "Isaiah", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SoldierM.png",
        weapons: ["Cannon", "Blasters"], 
        stats: { str: 5, dex: 6, def: 7, spd: 4 }, 
        tags: ["Cannon", "Blasters", "Exalted Lion", "Euro Pop", "'Bot' Bot"] 
    },
    { 
        id: 39, 
        name: "Jiro", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ShinobiM.png",
        weapons: ["Sword", "Scythe"], 
        stats: { str: 5, dex: 7, def: 3, spd: 7 }, 
        tags: ["Sword", "Scythe", "'Bot' Bot"] 
    },
    { 
        id: 40, 
        name: "Lin Fei", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_WuxiaM.png",
        weapons: ["Katars", "Cannon"], 
        stats: { str: 3, dex: 8, def: 4, spd: 7 }, 
        tags: ["Katars", "Cannon", "Pet Owner", "Saw Dragon"] 
    },
    { 
        id: 41, 
        name: "Zariel", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CelestialM.png",
        weapons: ["Gauntlets", "Bow"], 
        stats: { str: 7, dex: 4, def: 7, spd: 4 }, 
        tags: ["Gauntlets", "Bow", "25 BCX 1v1 Top 8", "25 BCX 2v2 Top 6"] 
    },
    { 
        id: 42, 
        name: "Ray Man", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RaymanM.png",
        weapons: ["Gauntlets", "Axe"], 
        stats: { str: 5, dex: 5, def: 6, spd: 6 }, 
        tags: ["Gauntlets", "Axe", "BCX 2v2 Winner", "Outer Space", "Magic User"] 
    },
    { 
        id: 43, 
        name: "Dusk", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ElfwarM.png",
        weapons: ["Spear", "Orb"], 
        stats: { str: 6, dex: 7, def: 4, spd: 5 }, 
        tags: ["Spear", "Orb", "Fangwild", "Magic User", "25 BCX 1v1 Top 8"]
    },
    { 
        id: 44, 
        name: "Fait", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpellwitchM.png",
        weapons: ["Scythe", "Orb"], 
        stats: { str: 7, dex: 4, def: 4, spd: 7 }, 
        tags: ["Scythe", "Orb", "Brynn Chosen", "Pet Owner", "Euro Pop", "Book Club", "BCX 1v1 Winner", "Magic User", "Hat Wearer"] 
    },
    { 
        id: 45, 
        name: "Thor", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ThorM.png",
        weapons: ["Hammer", "Orb"], 
        stats: { str: 6, dex: 4, def: 7, spd: 5 }, 
        tags: ["Hammer", "Orb", "Asgardian", "BCX 2v2 Winner"] 
    },
    { 
        id: 46, 
        name: "Petra", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RagefighterM.png",
        weapons: ["Gauntlets", "Orb"], 
        stats: { str: 8, dex: 4, def: 4, spd: 6 }, 
        tags: ["Gauntlets", "Orb", "Brynn Chosen", "BCX 2v2 Winner", "'Bot' Bot", "25 BCX 1v1 Top 8", ] 
    },
    { 
        id: 47, 
        name: "Vector", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ActualRobotM.png",
        weapons: ["Rocket Lance", "Bow"], 
        stats: { str: 5, dex: 4, def: 6, spd: 7 }, 
        tags: ["Rocket Lance", "Bow", "Outer Space", "Shapeshifter"] 
    },
    { 
        id: 48, 
        name: "Volkov", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_VampLordM.png",
        weapons: ["Axe", "Scythe"], 
        stats: { str: 4, dex: 8, def: 6, spd: 4 }, 
        tags: ["Axe", "Scythe", "Batavia", "Lin Fei Trained", "Shapeshifter", "Magic User", "Semi-Human"] 
    },
    { 
        id: 49, 
        name: "Onyx", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GargoyleM.png",
        weapons: ["Gauntlets", "Cannon"], 
        stats: { str: 5, dex: 4, def: 8, spd: 5 }, 
        tags: ["Gauntlets", "Cannon", "Book Club", "Batavia", "BCX 2v2 Winner", "Saw Dragon"]
    },
    { 
        id: 50, 
        name: "Jaeyun", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SellswordM.png",
        weapons: ["Sword", "Greatsword"], 
        stats: { str: 6, dex: 5, def: 5, spd: 6 }, 
        tags: ["Sword", "Greatsword", "BCX 1v1 Winner", "BCX 2v2 Winner", "Saw Dragon"] 
    },
    { 
        id: 51, 
        name: "Mako", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ActualSharkM.png",
        weapons: ["Katars", "Greatsword"], 
        stats: { str: 6, dex: 4, def: 4, spd: 8 }, 
        tags: ["Katars", "Greatsword", "Thera", "Didn't Read"] 
    },
    { 
        id: 52, 
        name: "Magyar", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GhostArmorM.png",
        weapons: ["Hammer", "Greatsword"], 
        stats: { str: 5, dex: 4, def: 9, spd: 4 }, 
        tags: ["Hammer", "Greatsword", "Batavia", "Saw Dragon", "Hat Wearer"] 
    },
    { 
        id: 53, 
        name: "Reno", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BountyHunterM.png",
        weapons: ["Blasters", "Orb"], 
        stats: { str: 4, dex: 7, def: 6, spd: 5 }, 
        tags: ["Blasters", "Orb", "Outer Space", "Hat Wearer"] 
    },
    { 
        id: 54, 
        name: "Munin", 
        image: "https://cms.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_BirdBardM.png",
        weapons: ["Bow", "Scythe"], 
        stats: { str: 5, dex: 6, def: 4, spd: 7 }, 
        tags: ["Bow", "Scythe", "Asgardian"] 
    },
    { 
        id: 55, 
        name: "Arcadia", 
        image: "https://cms.brawlhalla.com/c/uploads/2022/03/a_Roster_Pose_FairyQueenM.png",
        weapons: ["Spear", "Greatsword"], 
        stats: { str: 7, dex: 7, def: 4, spd: 4 }, 
        tags: ["Spear", "Greatsword", "Fangwild", "Pet Owner", "Magic User"]
    },
    { 
        id: 56, 
        name: "Ezio", 
        image: "https://cms.brawlhalla.com/c/uploads/2022/07/a_Roster_Pose_EzioM.png",
        weapons: ["Sword", "Orb"], 
        stats: { str: 5, dex: 7, def: 4, spd: 6 }, 
        tags: ["Sword", "Orb"] 
    },
    { 
        id: 57, 
        name: "Tezca", 
        image: "https://cms.brawlhalla.com/c/uploads/2022/12/a_Roster_Pose_LuchadorM.png",
        weapons: ["Battle Boots", "Gauntlets"], 
        stats: { str: 7, dex: 5, def: 5, spd: 5 }, 
        tags: ["Battle Boots", "Gauntlets", "25 BCX 2v2 Top 6"] 
    },
    { 
        id: 58, 
        name: "Thea", 
        image: "https://cms.brawlhalla.com/c/uploads/2023/03/a_Roster_Pose_SpeedsterM.png",
        weapons: ["Battle Boots", "Rocket Lance"], 
        stats: { str: 4, dex: 6, def: 3, spd: 9 }, 
        tags: ["Battle Boots", "Rocket Lance", "Hat Wearer"] 
    },
    { 
        id: 59, 
        name: "Red Raptor", 
        image: "https://cms.brawlhalla.com/c/uploads/2023/06/a_Roster_Pose_SentaiM.png",
        weapons: ["Battle Boots", "Orb"], 
        stats: { str: 6, dex: 6, def: 4, spd: 6 }, 
        tags: ["Battle Boots", "Orb", "Outer Space", "Brynn Chosen", "25 BCX 1v1 Top 8", "Saw Dragon", "Hat Wearer"] 
    },
    { 
        id: 60, 
        name: "Loki", 
        image: "https://cms.brawlhalla.com/c/uploads/2023/09/Loki_icon-1.png",
        weapons: ["Katars", "Scythe"], 
        stats: { str: 4, dex: 8, def: 5, spd: 5 }, 
        tags: ["Katars", "Scythe", "Pet Owner", "Asgardian", "Magic User"] 
    },
    { 
        id: 61, 
        name: "Seven", 
        image: "https://cms.brawlhalla.com/c/uploads/2023/12/roboengineer-rostericon.png",
        weapons: ["Spear", "Cannon"], 
        stats: { str: 7, dex: 3, def: 8, spd: 4 }, 
        tags: ["Spear", "Cannon", "Brynn Chosen", "Hat Wearer"]
    },
    { 
        id: 62, 
        name: "Vivi", 
        image: "https://cms.brawlhalla.com/c/uploads/2024/08/a_Roster_Pose_ViviL.png",
        weapons: ["Battle Boots", "Blasters"], 
        stats: { str: 6, dex: 5, def: 4, spd: 7 }, 
        tags: ["Battle Boots", "Blasters", "25 BCX 1v1 Top 8"] 
    },
    { 
        id: 63, 
        name: "Imugi", 
        image: "https://cms.brawlhalla.com/c/uploads/2024/07/imgui-icon.png",
        weapons: ["Axe", "Greatsword"], 
        stats: { str: 8, dex: 3, def: 8, spd: 3 }, 
        tags: ["Axe", "Greatsword", "Shapeshifter", "Saw Dragon"] 
    },
    { 
        id: 64, 
        name: "King Zuva", 
        image: "https://cms.brawlhalla.com/c/uploads/2024/10/a_Roster_Pose_ZuvaM.png",
        weapons: ["Hammer", "Battle Boots"], 
        stats: { str: 8, dex: 4, def: 6, spd: 4 }, 
        tags: ["Hammer", "Battle Boots"] 
    },
    { 
        id: 65, 
        name: "Priya", 
        image: "https://cms.brawlhalla.com/c/uploads/2025/01/Mobile-icon.png",
        weapons: ["Chakram", "Sword"], 
        stats: { str: 4, dex: 6, def: 5, spd: 7 }, 
        tags: ["Chakram", "Sword", "25 BCX 1v1 Top 8"] 
    },
    { 
        id: 66, 
        name: "Ransom", 
        image: "https://cms.brawlhalla.com/c/uploads/2025/06/a_Roster_Pose_CybervirusM.png",
        weapons: ["Chakram", "Bow"], 
        stats: { str: 7, dex: 4, def: 3, spd: 8 }, 
        tags: ["Chakram", "Bow", "Semi-Human"] 
    },
    { 
        id: 67, 
        name: "Lady Vera", 
        image: "https://cms.brawlhalla.com/c/uploads/2025/11/a_Roster_Pose_ClericM.png",
        weapons: ["Chakram", "Scythe"], 
        stats: { str: 3, dex: 7, def: 8, spd: 4 }, 
        tags: ["Chakram", "Scythe", "Exalted Lion", "Magic user", "Book Club", "Thera", "Hat Wearer"]
    },
    { 
        id: 68, 
        name: "Rupture", 
        image: "https://cms.brawlhalla.com/c/uploads/2026/01/a_Roster_Pose_DarkheartMonsterM.png",
        weapons: ["Katars", "Rocket Lance"], 
        stats: { str: 9, dex: 3, def: 5, spd: 5 }, 
        tags: ["Katars", "Rocket Lance", "Shapeshifter", "Semi-Human", "Outer Space"] 
    }
];
let legends = JSON.parse(localStorage.getItem('brawlData')) || defaultLegends;

function save() {
    localStorage.setItem('brawlData', JSON.stringify(legends));
}

function render() {
    // 1. Get the current typing and the dropdown values
    // NOTE: Changed to 'search-input' to match your filter functions
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
    const weaponFilter = document.getElementById('weaponFilter');
    const selectedWeapon = weaponFilter ? weaponFilter.value : "All";
    const statSort = document.getElementById('statSort');
    const sortKey = statSort ? statSort.value : "default";

    // 2. THE FILTER LOGIC
    let filtered = legends.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(searchTerm) || 
                     l.tags.some(t => t.toLowerCase().includes(searchTerm));        
        // Change the strict '===' to '.includes()'
    const matchesActiveTags = activeFilters.every(filter => 
            l.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())) || 
            l.weapons.some(w => w.toLowerCase().includes(filter.toLowerCase()))
            );

        const matchesWeaponDropdown = selectedWeapon === "All" || l.weapons.includes(selectedWeapon);

        return matchesSearch && matchesActiveTags && matchesWeaponDropdown;
    });

    // 3. Handle Sorting
    if (sortKey !== 'default') {
        filtered.sort((a, b) => b.stats[sortKey] - a.stats[sortKey]);
    }

    // 4. Update the "Filter Chips" UI
    const chipContainer = document.getElementById('filter-chips');
    if (chipContainer) {
        chipContainer.innerHTML = activeFilters.map(t => `
            <span class="chip" onclick="removeFilterTag('${t}')">
                ${t.toUpperCase()} <small>×</small>
            </span>
        `).join('');
    }

    // 5. Draw the Legend Grid
    const grid = document.getElementById('legendGrid');
    if (!grid) return;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <p>No legends match your criteria.</p>
                <button onclick="resetFilters()" class="btn-add-tag" style="width: auto; padding: 10px 20px;">Clear All Filters</button>
            </div>
        `;
    } else {
        grid.innerHTML = filtered.map(l => `
            <div class="card">
                <div class="image-container">
                    <img src="${l.image || 'https://placehold.co/200x200?text=No+Image'}" alt="${l.name}" class="legend-img">
                </div>
                <h3>${l.name}</h3>
                <div style="color: var(--gold); font-size: 0.8em; margin-bottom: 10px;">${l.weapons.join(' • ')}</div>
                
                <div class="stats-container" style="margin: 15px 0;">
                    ${['str', 'dex', 'def', 'spd'].map(s => `
                        <div class="stat-row">
                            <span class="stat-label">${s.toUpperCase()}</span>
                            <div class="bar-bg"><div class="bar-fill" style="width: ${l.stats[s] * 10}%"></div></div>
                            <span class="stat-num">${l.stats[s]}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="tag-container">
                    ${l.tags.map((t, index) => `
                        <span class="tag">
                            ${t} 
                            <button class="tag-remove" onclick="removeTag(${l.id}, ${index})">×</button>
                        </span>
                    `).join('')}
                </div>
                
                <div class="add-tag-wrapper" id="add-tag-${l.id}">
                    <button class="btn-add-tag" onclick="showTagInput(${l.id})">+ ADD TAG</button>
                </div>
            </div>
        `).join('');
    }
}

// Global window functions
window.showTagInput = (id) => {
    const container = document.getElementById(`add-tag-${id}`);
    container.innerHTML = `
        <input type="text" id="input-${id}" placeholder="Type & press Enter..." 
               style="width: 100%; margin-top: 10px; box-sizing: border-box;" 
               onkeydown="if(event.key==='Enter') this.blur()"
               onblur="saveInlineTag(${id})">
    `;
    document.getElementById(`input-${id}`).focus();
};

window.saveInlineTag = (id) => {
    const inputField = document.getElementById(`input-${id}`);
    if (!inputField) return;
    const val = inputField.value.trim();
    if (val !== "") {
        const legend = legends.find(l => l.id === id);
        if (!legend.tags.includes(val)) {
            legend.tags.push(val);
            save();
        }
    }
    render();
};

window.removeTag = (legendId, tagIndex) => {
    const legend = legends.find(l => l.id === legendId);
    if (legend) {
        legend.tags.splice(tagIndex, 1);
        save();
        render();
    }
};

window.resetFilters = () => {
    activeFilters = [];
    document.getElementById('search-input').value = '';
    document.getElementById('weaponFilter').value = 'All';
    document.getElementById('statSort').value = 'default';
    render();
};

window.addFilterTag = (val) => {
    const tag = val.trim().toLowerCase();
    if (tag && !activeFilters.includes(tag)) {
        activeFilters.push(tag);
        document.getElementById('search-input').value = '';
        render();
    }
};

window.removeFilterTag = (tag) => {
    activeFilters = activeFilters.filter(t => t !== tag);
    render();
};

// Event Listeners - Use 'search-input'
// Corrected Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const sInput = document.getElementById('search-input');
    const wFilter = document.getElementById('weaponFilter');
    const sSort = document.getElementById('statSort');

    if (sInput) {
        sInput.addEventListener('input', render);
        
        // Press enter to turn the search term into a permanent filter chip
        sInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && sInput.value.trim() !== "") {
                addFilterTag(sInput.value);
                sInput.value = ""; // Clear input after adding chip
                render(); // Ensure UI updates immediately
            }
        });
    }

    if (wFilter) wFilter.addEventListener('change', render);
    if (sSort) sSort.addEventListener('change', render);
    
    render();
});