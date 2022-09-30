# 餐廳論壇 api 設計

## 和 User 有關的路由

| method |             route              |            feature            |             detail             |
| :----: | :----------------------------: | :---------------------------: | :----------------------------: |
| `POST` |    `/api/v1/user/register`     |             註冊              |       使用者可以註冊網站       |
| `POST` |      `/api/v1/user/logIn`      |             登入              |       使用者可以登入網站       |
| `PUT`  |         `/api/v1/user`         |         編輯個人資料          |     使用者可以編輯個人資料     |
| `GET`  |  `/api/v1/user/:id/comments`   |           查看評論            |   使用者查看自己評論過的餐廳   |
| `GET`  | `/api/v1/user/:id/restaurants` |           查看餐廳            |      使用者自己收藏的餐廳      |
| `GET`  |  `/api/v1/user/:id/followers`  | 查看追蹤者(user <- follower)  | 使用者查看正在追蹤自己的使用者 |
| `GET`  | `/api/v1/user/:id/followings`  | 查看追蹤者(user -> following) |  使用者查看自己追蹤中的使用者  |
| `GET`  |       `/api/v1/user/:id`       |          查看使用者           |      使用者查看其他使用者      |

## 和 Admin 有關的路由

|  method  |             route              |     feature      |               detail               |
| :------: | :----------------------------: | :--------------: | :--------------------------------: |
|  `POST`  |     `/api/v1/admin/logIn`      |       登入       |     網站管理者可以登入網站後台     |
|  `GET`   |  `/api/v1/admin/restaurants`   |   查看所有餐廳   |     網站管理者可以查看所有餐廳     |
|  `GET`   | `/api/v1/admin/restaurant/:id` |   查看特定餐廳   |     網站管理者可以查看特定餐廳     |
|  `PUT`   | `/api/v1/admin/restaurant/:id` |   修改特定餐廳   |      網站管理可以修改特定餐廳      |
| `DELETE` | `/api/v1/admin/restaurant/:id` |   刪除特定餐廳   |      網站管理可以刪除特定餐廳      |
|  `GET`   |   `/api/v1/admin/categories`   | 查看所有餐廳分類 |   網站管理者可以查看所有餐廳分類   |
|  `POST`  |    `/api/v1/admin/category`    |   新增餐廳分類   |     網站管理者可以新增餐廳分類     |
|  `PUT`   |  `/api/v1/admin/category/:id`  | 修改特定餐廳分類 |   網站管理者可以修改特定餐廳分類   |
| `DELETE` |  `/api/v1/admin/category/:id`  | 刪除特定餐廳分類 |   網站管理者可以刪除特定餐廳分類   |
| `PATCH`  |    `/api/v1/admin/user/:id`    |   調整管理權限   | 網站管理者可以修改特定用戶管理權限 |

## 和 Restaurant 有關的路由

| method |                route                |    feature     |                 detail                 |
| :----: | :---------------------------------: | :------------: | :------------------------------------: |
| `GET`  |        `/api/v1/restaurants`        |  瀏覽所有餐廳  |            瀏覽所有餐廳資料            |
| `GET`  |      `/api/v1/restaurant/:id`       |  瀏覽個別餐廳  |            個別餐廳詳細資料            |
| `GET`  | `/api/v1/restaurants?categoryId=OO` | 用分類篩選餐廳 | 瀏覽所有餐廳資料時，可以用分類篩選餐廳 |
| `GET`  |    `/api/v1/restaurants/newest`     |  查看最新餐廳  |        查看最新上架的 10 筆餐廳        |

## 和 Favorite 有關的路由

|  method  |              route               | feature  |      detail      |
| :------: | :------------------------------: | :------: | :--------------: |
|  `POST`  | `/api/v1/favorite/:restaurantId` | 收藏餐廳 |   收藏喜愛餐廳   |
| `DELETE` | `/api/v1/favorite/:restaurantId` | 取消收藏 | 取消收藏喜愛餐廳 |

## 和 Comment 有關的路由

| method |              route               |   feature    |        detail        |
| :----: | :------------------------------: | :----------: | :------------------: |
| `POST` | `/api/v1/comments/:restaurantId` |     留言     |    對餐廳留下評論    |
| `GET`  |    `/api/v1/comments/newest`     | 查看最新評論 | 查看最新的 10 筆評論 |

## 和 Followship 有關的路由

|  method  |               route                | feature  |       detail       |
| :------: | :--------------------------------: | :------: | :----------------: |
|  `POST`  | `/api/v1/followships/:followingId` | 追蹤用戶 |  追蹤其他的使用者  |
| `DELETE` | `/api/v1/followships/:followingId` | 取消追蹤 | 取消追蹤其他的用戶 |
