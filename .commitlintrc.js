module.exports = {
    extends:[
        '@commitlint/config-conventional'
    ],
    rules:{
        'type-enum':[
            2,
            "always",
            [
                'feat', // 新功能（feature）
                'fix', // 修复bug
                'docs', // 修改文档
                'style', // 修改代码格式，不影响代码逻辑
                'refactor', // 代码重构，理论上不影响功能逻辑
                'test', // 修改测试用例
                'build', // 构建或其他工具的变动(如webpack)
                'revert', // 还原以前的提交
                'merge', // 分支代码合并
            ]
        ]
    }
}