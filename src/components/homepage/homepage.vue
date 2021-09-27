<template>
  <div>
    <a-table :columns="columns" :dataSource="userInfo" :pagination="false" rowKey="age">

    </a-table>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      userInfo: [
        {
          userName: '张三',
          age: 15,
          sex: '男'
        }, {
          userName: '李四',
          age: 16,
          sex: '男'
        }, {
          userName: '王二麻',
          age: 28,
          sex: '女'
        }
      ],
      columns: [
        {
          dataIndex: 'name',
          key: 'name',
          slots: { title: 'customTitle' },
          scopedSlots: { customRender: 'name' }
        },
        {
          title: 'userName',
          dataIndex: 'userName',
          key: 'userName'
        },
        {
          title: 'age',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: 'sex',
          key: 'sex',
          dataIndex: 'sex'
        }
      ]
    }
  },
  beforeCreate () {
    console.log('homePage的beforeCreate调用啦')
  },
  created () {
    console.log('homePage的created调用啦')
  },
  beforeMount () {
    console.log('homePage的beforeMount调用啦')
  },
  mounted () {
    console.log('homePage的mounted调用啦')
  },
  beforeUpdate () {
    console.log('homePage的beforeUpdate调用啦')
  },
  updated () {
    console.log('homePage的updated调用啦')
  },
  beforeDestroy () {
    console.log('homePage的beforeDestroy调用啦')
  },
  destroyed () {
    console.log('homePage的destroyed调用啦')
  }
}
</script>

<style>

</style>
