<template>
  <div class="pos">
    <el-row>

      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="70"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="deleteSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>{{totalCount}} <small>金额</small>：{{totalMoney}} 元
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      
      <el-col :span='17' class="pos-goods">
        <div class="goods">
          <div class="title">常用商品</div>
          <div class="goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="price">￥{{goods.price}}元</span>
              </li>
              
            </ul>
          </div>

          <div class="goods-type">
              <el-tabs>
                 <el-tab-pane label="汉堡">
                    
                    <div>
                      <ul class='cookList'>
                          <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                              <span class="foodImg"><img src="goods.goodsImg" width="100%"></span>
                              <span class="foodName">{{goods.goodsName}}</span>
                              <span class="foodPrice">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                    </div>

                 </el-tab-pane>
                 <el-tab-pane label="小食">
                    <div>
                      <ul class='cookList'>
                          <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                              <span class="foodImg"><img src="goods.goodsImg" width="100%"></span>
                              <span class="foodName">{{goods.goodsName}}</span>
                              <span class="foodPrice">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                    </div>
                 </el-tab-pane>
                 <el-tab-pane label="饮料">
                    <div>
                      <ul class='cookList'>
                          <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                              <span class="foodImg"><img src="goods.goodsImg" width="100%"></span>
                              <span class="foodName">{{goods.goodsName}}</span>
                              <span class="foodPrice">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                    </div>
                 </el-tab-pane>
                 <el-tab-pane label="套餐">
                    <div>
                      <ul class='cookList'>
                          <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                              <span class="foodImg"><img src="goods.goodsImg" width="100%"></span>
                              <span class="foodName">{{goods.goodsName}}</span>
                              <span class="foodPrice">￥{{goods.price}}元</span>
                          </li>
                      </ul>
                    </div>
                 </el-tab-pane>
              </el-tabs>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'pos',
  data () {
    return {
      tableData : [],
      goodsData : [
        {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
      ],
      goodsTypeData : [
        {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
      ],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalMoney: 0,
      totalCount: 0
    }
  },
  created: function() {
    // 读取常用商品列表
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(response=>{
      console.log(response);
      this.oftenGoods = response.data;
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误，不能访问');
    })

    // 读取分类商品列表
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(response=>{
      console.log(response);
      this.type0Goods = response.data[0];
      this.type1Goods = response.data[1];
      this.type2Goods = response.data[2];
      this.type3Goods = response.data[3];
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误，不能访问');
    })
  },
  mounted: function() {
    // var orderHeight = document.body.clientHeight;
    // document.getElementById("order-list").style.height = orderHeight + 'px';
  },
  methods: {
    addOrderList(goods) {

      this.totalMoney = 0;
      this.totalCount = 0;

      // 商品是否已经存在于订单列表中
      let isHave = false;
      for(let i=0; i < this.tableData.length; i++) {
        if(this.tableData[i].goodsId == goods.goodsId){
          isHave = true;
        }
      }

      // 根据判断的值编写业务逻辑
      if(isHave) {
        // 改变列表中商品数量
        let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = {goodsId:goods.goodsId, goodsName:goods.goodsName, price:goods.price, count:1};
        this.tableData.push(newGoods);
      }

      this.getAllMoney();

    },
    // 删除单个商品
    deleteSingleGoods(goods) {
      this.tableData = this.tableData.filter(o=>o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    // 删除所有商品
    delAllGoods () {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    // 模拟结账
    checkout() {
      if(this.totalCount != 0){
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: '结账成功',
          type: 'success'
        });
      } else {
        this.$message.error('不能空结，老板了解你急切的心情！');
      }
    },
    // 汇总数量和金额
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if(this.tableData) {
      // 计算汇总数量和金额
        this.tableData.forEach((element)=>{
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney+(element.price*element.count);
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid#C0CCDA; 
  }
  .pos-goods {
    background-color: #F9FAFC;
  }
  .totalDiv {
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #D3dcc6;
  }
  .title {
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
  }
  .div-btn {
    margin-top: 20px;
  }
  .goods-list ul li{
    list-style: none;
    float: left;
    border:1px solid #f9fafc;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    cursor: pointer;
  }
  .price {
    color:#58B7FF;
  }
  .goods-type {
    clear: both;
    height: auto;
    overflow: hidden;
    border-top: 1px solid #D3dcc6;
  }
  .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auto;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
       cursor: pointer;
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>
