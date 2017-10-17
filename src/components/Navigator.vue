<template>

  <el-row>
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText">
        </el-input>
        <el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode" check-strictly=true
          highlight-current=true show-checkbox=false indent=64 accordion node-key="id" ref="tree">
        </el-tree>
        <div class="buttons">
          <el-button @click="getCheckedNodes">通过 node 获取</el-button>
          <el-button @click="getCheckedKeys">通过 key 获取</el-button>
          <el-button @click="setCheckedNodes">通过 node 设置</el-button>
          <el-button @click="setCheckedKeys">通过 key 设置</el-button>
          <el-button @click="resetChecked">清空</el-button>
          <el-button @click="open">点击打开 Message Box</el-button>
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="4">
    <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    watch: {
      filterText (val) {
        this.$refs.tree.filter(val)
      }
    },

    methods: {
      getCheckedNodes () {
        console.log(this.$refs.tree.getCheckedNodes(true)[0].url)
      },
      getCheckedKeys () {
        console.log(this.$refs.tree.getCheckedKeys())
      },
      setCheckedNodes () {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }])
      },
      setCheckedKeys () {
        this.$refs.tree.setCheckedKeys([3])
      },
      resetChecked () {
        this.$refs.tree.setCheckedKeys([])
      },
      filterNode (value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      open () {
        this.$alert(this.$refs.tree.getCheckedNodes(true)[0].url, this.$refs.tree.getCheckedNodes(true)[0].label, {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      }
    },

    data () {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1',
              url: 'www.baidu.com'
            }, {
              id: 10,
              label: '三级 1-1-2',
              url: 'www.baidu.com'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            url: 'www.baidu.com',
            label: '二级 2-1'
          }, {
            id: 6,
            url: 'www.baidu.com',
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            url: 'www.baidu.com',
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            url: 'www.baidu.com'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 50vh
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
