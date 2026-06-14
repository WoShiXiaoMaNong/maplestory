# MapleStory

一个用于学习 MapleStory 源码的项目。

> **免责声明：仅限用于学习、研究和源码阅读。禁止用于商业运营、非法发布或任何未授权的私服用途。**

## 快速开始

### 1. 准备数据库

1. 安装 MySQL。
2. 创建数据库： maple
```sql
CREATE DATABASE maple;
```
3. 创建本地用户
```sql
CREATE USER 'db_user_name'@'%' IDENTIFIED WITH mysql_native_password BY 'db_user_password';
```
4. 赋予权限
```sql
GRANT ALL PRIVILEGES ON maple.* TO 'db_user_name'@'%';
FLUSH PRIVILEGES;
```
5. 导入 `sql/ms_20210813_234816.sql` 中的数据库结构和数据。
> 注意，将 db_user_name ， db_user_password 改成你自己的用户名和密码
> 确保 `config/db.properties` 中使用正确的用户名和密码
### 2. 配置服务器
1. 复制 `config-temp/`整个目录, 并重命名为 `config/`
2. 编辑 `config/server.properties`，根据需要调整服务器端口和其他运行参数。
3. 修改 `config/db.properties` 中的数据库连接信息。

### 3. 启动服务

执行：

```shell
./start.sh
```

### 4. 常见端口

- 服务器端口：9595
- 网关端口：8600
- 客户端端口：2525~2530

## 说明

- 请先确保数据库已正确启动并可连接。
- 启动后可通过客户端连接服务器进行测试。
- 若需修改其他配置，可参考 `config/` 下的配置文件。

