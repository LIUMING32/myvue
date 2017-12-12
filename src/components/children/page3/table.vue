<template>
	<div>
		<h2>海大星艺员工统计表</h2>
		<el-table  	
	  	:row-class-name="tableRowClassName"
	  	ref="multipleTable"
	    :data="tableData"
	    style="width: 100%;"
	    height="300"
	    :default-sort = "{prop: 'date', order: 'descending'}"
	    @selection-change="handleSelectionChange">
	    >
			<el-table-column
	      type="selection"
	      width="55"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="date"
	      label="日期"
	      sortable
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="name"
	      label="姓名"
	      sortable
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="nums"
	      label="年龄"
	      sortable
	      width="180"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="sexs"
	      label="性别"
	      width="180"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="地址"
	      :formatter="formatter">
	    </el-table-column>
	    <el-table-column
	    	fixed="right"
	      label="操作"
	      width="120">
	      <template slot-scope="scope">
	        <el-button
	          @click.native.prevent="deleteRow(scope.$index, tableData)"
	          type="text"
	          size="small">
	          移除
	        </el-button>
	        <span>|</span>
	        <el-button
	        	@click="dialogFormVisible = true"
	          type="text"
	          size="small">
	          	编辑
	        </el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	
		<!-- 表格编辑 -->
		<el-dialog title="员工信息详情" :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="活动名称" :label-width="formLabelWidth">
		      <el-input v-model="form.name" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="活动区域" :label-width="formLabelWidth">
		      <el-select v-model="form.region" placeholder="请选择活动区域">
		        <el-option label="区域一" value="shanghai"></el-option>
		        <el-option label="区域二" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>
		    <el-form-item label="活动时间" :label-width="formLabelWidth">
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2">-</el-col>
			    <el-col :span="11">
			      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
			    </el-col>
			  </el-form-item>
			  <el-form-item label="即时配送" :label-width="formLabelWidth">
			    <el-switch v-model="form.delivery"></el-switch>
			  </el-form-item>
			  <el-form-item label="活动性质" :label-width="formLabelWidth">
			    <el-checkbox-group v-model="form.type">
			      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
			      <el-checkbox label="地推活动" name="type"></el-checkbox>
			      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
			      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
			    </el-checkbox-group>
			  </el-form-item>
			  <el-form-item label="特殊资源" :label-width="formLabelWidth">
			    <el-radio-group v-model="form.resource">
			      <el-radio label="线上品牌商赞助"></el-radio>
			      <el-radio label="线下场地免费"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="活动形式" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form.desc"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" :plain="true" @click="onSubmit">立即创建</el-button>
			    <el-button @click="dialogFormVisible = false">取消</el-button>
			  </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <!--<el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
		  </div>
		</el-dialog>
		<h2>加入海大流程</h2>
		<div style="margin-top: 20px;">
			<el-steps  :active="active" finish-status="success">
			  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
			  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
			  <el-step title="步骤 3" description="这段就没那么长了"></el-step>
			</el-steps>
			<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
		</div>
		
		
	</div>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          nums: '18',
          sexs: '男',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          nums: '20',
          sexs: '男',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          nums: '22',
          sexs: '男',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          nums: '24',
          sexs: '男',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        multipleSelection: [],
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        active: 0
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      onSubmit() {
        this.$message({
          showClose: true,
          message: '创建成功！',
          type: 'success'
        });
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
<style >
	.el-table th{text-align: center;}
	.el-switch,.el-select,.el-radio-group,.el-checkbox-group{float: left;}
</style>
