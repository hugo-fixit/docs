---
title: Markdown 测试
date: 2022-04-20T17:50:22+08:00
description: Test for Markdown rendering
tags:
  - Tests
  - Markdown
  - Content
categories:
  - Tests
lightgallery: true
cacheRemoteImages:
  enable: true
  replace: false
menu:
  main:
    title: Test for Markdown rendering
    parent: tests
    params:
      icon: fa-solid fa-vial text-success
---
<!-- markdownlint-disable-file MD045 -->

## Alerts

哈哈哈哈哈哈 nformation that users should take into accou

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

> 哈哈哈哈哈哈哈哈
{.blockquote-center}

> [!NOTE] [FixIt](https://fixit.lruihao.cn)
> 一个简洁、优雅且高效的 Hugo 主题。

> [!NOTE] Hugo

> [!NOTE] _Hugo_
> The world’s fastest framework for building websites

> [!NOTE] **Hugo**

> [!TIP] **Hugo** FixIt

> [!ban]+ ban admonition
> Lorem ipsum dolor sit amet consectetur adipisicing

## Marked Text

```
臣亮言：==先帝==[secondary]創業未半，而==中道崩殂==[info]。今天下三分，益州疲敝，此誠==危急存亡之秋==[danger]也！然侍衞之臣，不懈於內；==忠志之士==[primary]，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。

宮中、府中，俱為一體；陟罰臧否，不宜異同。若有==作奸==[warning]、==犯科==[success]，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。
```

臣亮言：==先帝==[secondary]創業未半，而==中道崩殂==[info]。今天下三分，益州疲敝，此誠==危急存亡之秋==[danger]也！然侍衞之臣，不懈於內；==忠志之士==[primary]，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。

宮中、府中，俱為一體；陟罰臧否，不宜異同。若有==作奸==[warning]、==犯科==[success]，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。

## 二级标题

Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti natus sint velit ut, dolorem optio vero odio repellat aliquam, at repellendus fuga nemo porro adipisci doloremque, amet inventore molestias.

### 三级标题

Dignissimos est harum facere nam odit. Voluptatem, unde porro deleniti similique officia necessitatibus excepturi eaque quas officiis ut eum a esse error maxime enim ducimus fuga placeat voluptas. Rem, nemo.

#### 四级标题

Incidunt quia iste impedit iure, ex nam eveniet voluptates laboriosam suscipit adipisci, rem doloribus consequatur perferendis laudantium, doloremque reiciendis beatae accusantium modi nisi enim. Porro veritatis a eligendi eveniet dolor?

##### 五级标题

Qui eaque rerum minus, aperiam dignissimos enim, unde non natus modi, sapiente rem ipsum? Ipsam blanditiis voluptates ducimus nisi, quos rerum officiis perferendis est consequuntur sint ab, dolor, sequi facilis?

###### 六级标题

Ut reiciendis sit optio autem fugit porro tempora maiores debitis aliquam! Perferendis cumque dolore quas. Possimus corporis earum commodi vel similique eius quis incidunt veritatis voluptatibus, tenetur, consequatur, repellendus magni.

## timeline

```timeline {reverse=false, placement=bottom, animation=false, node=circle}
events:
  - timestamp: 2024-04-03 17:10:15
    hideTimestamp: true
    type: primary
    color: "#0bbd87"
    content: 测试内容 1111
    placement: top
    size: small
  - timestamp: 2024-07-17 00:09:47
    content: 测试内容 3333
    type: primary
    node: dot
    size: large
  - timestamp: 2024-07-16 00:09:47
    content: 测试内容 2222
```

## echarts

````md
异常数据测试

{{?{}< echarts data="test" />}}

```echarts

```

```echarts {js=true}

```
````

```echarts {width="100%", height="300px"}
title:
  text: 折线统计图
  top: 2%
  left: center
tooltip:
  trigger: axis
legend:
  data:
    - 邮件营销
    - 联盟广告
    - 视频广告
    - 直接访问
    - 搜索引擎
  top: 10%
grid:
  left: 5%
  right: 5%
  bottom: 5%
  top: 20%
  containLabel: true
toolbox:
  feature:
    saveAsImage:
      title: 保存为图片
xAxis:
  type: category
  boundaryGap: false
  data:
    - 周一
    - 周二
    - 周三
    - 周四
    - 周五
    - 周六
    - 周日
yAxis:
  type: value
series:
  - name: 邮件营销
    type: line
    stack: 总量
    data:
      - 120
      - 132
      - 101
      - 134
      - 90
      - 230
      - 210
  - name: 联盟广告
    type: line
    stack: 总量
    data:
      - 220
      - 182
      - 191
      - 234
      - 290
      - 330
      - 310
  - name: 视频广告
    type: line
    stack: 总量
    data:
      - 150
      - 232
      - 201
      - 154
      - 190
      - 330
      - 410
  - name: 直接访问
    type: line
    stack: 总量
    data:
      - 320
      - 332
      - 301
      - 334
      - 390
      - 330
      - 320
  - name: 搜索引擎
    type: line
    stack: 总量
    data:
      - 820
      - 932
      - 901
      - 934
      - 1290
      - 1330
      - 1320
```

echarts JS 代码块异步加载数据测试：

```echarts {js=true async=true}
return fetch('/echarts/les-miserables.json')
  .then((response) => response.json())
  .then((graph) => {
    graph.nodes.forEach(function (node) {
      node.label = {
        show: node.symbolSize > 30
      };
    });
    const option = {
      title: {
        text: 'Les Miserables',
        subtext: 'Circular layout',
        top: 'bottom',
        left: 'right'
      },
      tooltip: {},
      legend: [
        {
          data: graph.categories.map(function (a) {
            return a.name;
          })
        }
      ],
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'circular',
          circular: {
            rotateLabel: true
          },
          data: graph.nodes,
          links: graph.links,
          categories: graph.categories,
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          }
        }
      ]
    }
    return option;
});
```

Data 数据获取：

TOML

```echarts {data="t-round-cap"}
```

YAML

{{< echarts data="y-round-cap" />}}

## line break

`FixIt is a clean, elegant but advanced blog theme for Hugo developed by Lruihao. It is based on the original LoveIt Theme, KeepIt Theme and LeaveIt Theme.`

`FixIt 是一个由 Lruihao 开发的简洁、优雅且高效的 Hugo 博客主题。它的原型基于 LoveIt 主题，KeepIt 主题 和 LeaveIt 主题。`

## table

| 表达式                   | 说明                                                         |
| :----------------------- | :------------------------------------------------------------ |
| `0 0/5 * * * ?`          | 每隔 5 分钟执行一次                                          |
| `10 0/5 * * * ?`         | 每隔 5 分钟执行一次，每次执行都在分钟开始的 10 秒，例如 10:00:10、10:05:10 等等。 |
| `0 30 10-13 ? * WED,FRI` | 每周三和每周五的 10:30、11:30、12:30、13:30 执行。           |
| `0 0/30 8-9 5,20 * ?`    | 每个月的 5 号和 20 号的 8 点和 10 点之间每隔 30 分钟执行一次，也就是 8:00、8:30、9:00 和 9:30。 |
| `0 15 10 ? * *`      | 每天上午 10:15 执行任务                                        |
| `0 15 10 * * ?`      | 每天上午 10:15 执行任务                                        |
| `0 0 12 * * ?`       | 每天中午 12:00 执行任务                                        |
| `0 0 10,14,16 * * ?` | 每天上午 10:00 点、下午 14:00 以及下午 16:00 执行任务              |
| `0 0/30 9-17 * * ?`  | 每天上午 09:00 到下午 17:00 时间段内每隔半小时执行任务           |
| `0 * 14 * * ?`       | 每天下午 14:00 到下午 14:59 时间段内每隔 1 分钟执行任务            |
| `0 0-5 14 * * ?`     | 每天下午 14:00 到下午 14:05 时间段内每隔 1 分钟执行任务            |
| `0 0/5 14 * * ?`     | 每天下午 14:00 到下午 14:55 时间段内每隔 5 分钟执行任务            |
| `0 0/5 14,18 * * ?`  | 每天下午 14:00 到下午 14:55、下午 18:00 到下午 18:55 时间段内每隔 5 分钟执行任务 |
| `0 0 12 ? * WED`     | 每个星期三中午 12:00 执行任务                                  |
| `0 15 10 15 * ?`     | 每月 15 日上午 10:15 执行任务                                    |
| `0 15 10 L * ?`      | 每月最后一日上午 10:15 执行任务                                |
| `0 15 10 ? * 6L`     | 每月最后一个星期六上午 10:15 执行任务                          |
| `0 15 10 ? * 6#3`    | 每月第三个星期六上午 10:15 执行任务                            |
| `0 10,44 14 ? 3 WED` | 每年 3 月的每个星期三下午 14:10 和 14:44 执行任务                  |

## code

~~deleted line~~

:truck: Feat: _migrate ~~`ibruce.siteTime`~~ to `footer.siteTime`_

## long text

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime deleniti natus sint velit ut, dolorem optio vero odio repellat aliquam, at repellendus fuga nemo porro adipisci doloremque, amet inventore molestias.
Dignissimos est harum facere nam odit. Voluptatem, unde porro deleniti similique officia necessitatibus excepturi eaque quas officiis ut eum a esse error maxime enim ducimus fuga placeat voluptas. Rem, nemo.
Incidunt quia iste impedit iure, ex nam eveniet voluptates laboriosam suscipit adipisci, rem doloribus consequatur perferendis laudantium, doloremque reiciendis beatae accusantium modi nisi enim. Porro veritatis a eligendi eveniet dolor?
Qui eaque rerum minus, aperiam dignissimos enim, unde non natus modi, sapiente rem ipsum? Ipsam blanditiis voluptates ducimus nisi, quos rerum officiis perferendis est consequuntur sint ab, dolor, sequi facilis?
Ut reiciendis sit optio autem fugit porro tempora maiores debitis aliquam! Perferendis cumque dolore quas. Possimus corporis earum commodi vel similique eius quis incidunt veritatis voluptatibus, tenetur, consequatur, repellendus magni.
Ex quia, odio minus magni veniam quas iure impedit odit ducimus dicta ipsa dolore perspiciatis sequi explicabo reiciendis, beatae tempore amet ut consequuntur? Neque asperiores possimus nobis, earum voluptatem perferendis!
Aliquam atque necessitatibus laboriosam enim eum dignissimos tempora ex expedita, ducimus consectetur recusandae quisquam, numquam id, vel ab quaerat distinctio! Illo quas consequatur sint ea saepe nam in commodi similique?
Veritatis aliquid sequi eaque laudantium fugit saepe ea repellat provident iste magni laborum veniam tempore modi, distinctio consectetur architecto, recusandae id explicabo ad? Molestiae ea eaque reiciendis, magnam dolore optio?
Laudantium nemo nesciunt adipisci sequi quis quisquam eos quibusdam, consequatur autem perferendis veniam nam corporis eum magnam repudiandae similique, aspernatur tempore id voluptatum dicta vel? Tenetur commodi libero corrupti repudiandae.
Maxime commodi labore possimus voluptas nam sunt accusamus quia expedita eligendi adipisci ex quod amet sit autem delectus deserunt, cupiditate aliquam modi tenetur? Possimus eligendi iure maiores, maxime quos exercitationem.
Quod reiciendis officia laborum quasi eum id harum repudiandae ratione possimus quaerat aperiam architecto quo accusamus vitae eveniet inventore, pariatur quos. Ut, explicabo natus deserunt optio expedita quo autem velit.
Sint laboriosam eum ullam sapiente facilis, autem quae quibusdam quia ipsum fugit maiores dolores amet praesentium suscipit, et voluptates deserunt pariatur facere, ipsam asperiores veniam mollitia? Repellat voluptatum aliquid sint.
Dolorem modi magnam officiis laborum cumque fugiat hic dolor. Aut porro non necessitatibus, voluptatibus commodi dignissimos qui error dolores, dolorum, magni est ducimus itaque voluptate ipsa soluta molestias. Nulla, saepe!
Magnam corporis eligendi et in accusantium explicabo neque, fugiat expedita praesentium. Deserunt ab doloribus reprehenderit repellendus, facilis quis quos, incidunt ut quibusdam rerum eos exercitationem earum! Similique explicabo aliquid perspiciatis?
Quo vel sint molestiae, quia labore commodi fuga fugit voluptatem porro id? Necessitatibus voluptatem reprehenderit iure voluptas enim quod quia nemo rem facilis rerum beatae, qui omnis harum molestiae tempora!
Assumenda eos numquam sit soluta nobis inventore iure illum, earum magni nostrum ratione dolorem tempore veniam porro omnis quo quisquam enim? Quod autem deleniti fugit ut eveniet! Labore, nostrum facilis.
Nulla dolorem culpa voluptatum sint consectetur totam praesentium unde vero, voluptate sed enim dicta exercitationem, autem facere! Asperiores commodi voluptatem maxime atque perspiciatis voluptatibus unde, corrupti molestias, suscipit sed tempora.
Voluptatem fuga ea quae iusto nostrum iure eligendi nulla molestiae, quos, quia commodi. Officiis excepturi voluptate perspiciatis. Corrupti voluptatum autem quibusdam! Sed, repudiandae! Quis assumenda doloremque consequatur ex officia! Odit?
Quis voluptate minima fuga porro rerum voluptatum officia consequatur, cumque, quaerat ipsam iste assumenda explicabo corrupti inventore quos totam recusandae, odit harum fugit possimus. Deleniti fuga reiciendis soluta minima quam!
Praesentium nisi id maxime voluptate nemo nam vitae quisquam neque ex recusandae soluta illum officia quibusdam atque, nobis officiis error quae aliquid vero pariatur commodi reprehenderit molestias blanditiis dolorem? Corrupti.
Nam, asperiores numquam consectetur a deleniti esse voluptates quasi velit amet necessitatibus, earum molestias, autem aliquam dolorem. Adipisci, alias nemo dolore maiores esse blanditiis, libero voluptatibus, dolorem quia recusandae dolores!
Delectus accusamus modi qui repellendus eos illo cumque natus similique, nam animi facilis cupiditate distinctio consequatur officiis neque eius? Deserunt doloremque tenetur, eligendi optio aliquam ipsa pariatur culpa aspernatur eveniet!
Enim soluta vero, accusamus aut saepe maiores ea corporis velit? Debitis magnam officia minus non maxime exercitationem, sequi nisi rem nulla, eius aperiam dolorum perferendis consequuntur quaerat voluptatem voluptatum! Accusantium?
Consequatur, recusandae nobis sit, iusto illum quasi eum dolorem, veritatis autem sapiente non magnam! Voluptatibus vel facilis placeat fuga unde. Ipsum magnam illum ducimus quaerat explicabo eum non, rerum alias.
Illum, numquam repellendus! Corporis quae dolor totam, porro voluptatibus ducimus iste eveniet reiciendis esse dolore aliquid, eum voluptates dolorem minima excepturi? Illo, facilis consequatur enim ea quae molestias. Natus, debitis.
Sint vel voluptatem eaque, provident asperiores illum ut error molestiae? Saepe expedita debitis ex? Sint at ullam, aut iste dolore ut delectus tempore necessitatibus odit ratione reiciendis eligendi, rem omnis.
Doloribus sed ea, iste ratione illum omnis veniam facere quam inventore rem dolor iusto quidem. Corporis nobis neque quisquam blanditiis, sapiente eum animi veniam odio numquam aspernatur omnis voluptatum odit.
Voluptatum at fuga illo eos similique iure, obcaecati repudiandae reprehenderit ut! Ducimus, animi voluptates, impedit facere corrupti ratione, obcaecati nulla atque harum repudiandae labore incidunt recusandae ipsum veritatis ut eum.
Tempore eos necessitatibus, quae eum consequuntur, inventore assumenda, voluptates veritatis similique qui explicabo. Est, natus cum labore dolorem praesentium quas consequatur expedita, similique dolore alias, eum veritatis! Dicta, omnis sit.
Facilis quis asperiores totam reiciendis fugit distinctio explicabo quam voluptatibus dolore ex quisquam veniam perspiciatis tenetur, facere, ratione repellendus voluptates natus odit rerum officia rem eum quos sit vel. Officiis?
Officiis facilis voluptate necessitatibus architecto corrupti nisi minima sint modi nesciunt iste, quas neque corporis quaerat libero atque enim ipsam voluptatibus eligendi a? Quae ipsum, nesciunt vero unde quaerat inventore.
Deserunt labore praesentium consectetur ad accusantium dolores molestias doloribus, sed dolor sunt id quaerat. Repellendus accusamus similique velit adipisci obcaecati dolores alias minus animi sint laudantium. Maxime in id voluptatum.
Soluta, iusto. Dolores sunt, molestias magnam exercitationem delectus eum! Ex ut quo aut sed voluptatum quia debitis eaque quasi repudiandae, vel pariatur ratione odio ducimus nisi ea nesciunt dolor iure.
Maiores at nostrum repellendus ex nam fugit, maxime iusto quos reiciendis numquam qui corrupti. Dolore, dolorem obcaecati molestias libero cumque tempore quis eveniet ullam nostrum qui nesciunt excepturi deserunt distinctio.
Fuga nemo nam minus facere reiciendis maiores deleniti officiis, vero rem impedit, possimus quia magnam cumque odit? Tempore, possimus atque nesciunt eum vel quo corporis, pariatur magnam esse tempora in.
Eveniet rem culpa, exercitationem quod a ratione pariatur aliquid illo. Corrupti sit culpa, blanditiis excepturi tempore eos quis adipisci ex laboriosam quam doloremque magnam veniam accusantium modi incidunt qui quia.
Cumque, laborum asperiores. Iure nisi non totam cum repellendus! Accusantium, aliquid. Nisi suscipit reiciendis perferendis labore voluptatem, tenetur cum nesciunt, dicta nemo nam expedita similique possimus ducimus vitae eum quam.
Laudantium dolorum at molestiae quo odit repellat nam neque, ullam sed, blanditiis dolorem ut, aliquam porro fugit dolore maxime amet. Est, temporibus delectus voluptatibus assumenda incidunt natus nulla inventore deleniti.
Tenetur fuga ad magni? Excepturi blanditiis sint ullam consectetur repudiandae eius natus esse sed at, debitis nobis, facere labore! Tenetur iste ullam vero odit repudiandae amet porro ipsa ut mollitia.
Libero totam quia, voluptatibus placeat incidunt fuga explicabo aperiam dolorem perspiciatis quos, natus ducimus corporis vero nemo eaque unde, nisi nihil ipsa facilis nam officiis architecto consectetur! Molestiae, impedit tenetur.
Voluptatibus, ex quia ipsam quisquam fugiat quidem suscipit cum? Est, nemo nam! Alias, error. Aperiam nobis ut nulla saepe voluptas, hic, illum tempore rem earum repellendus in eveniet itaque accusantium.
Dolor quos deserunt autem quia ut animi atque, sunt quibusdam minima sapiente voluptate nesciunt perspiciatis molestias voluptatem accusamus harum commodi suscipit vitae quaerat quasi, voluptas natus vero eos dolorum. Dicta.
Hic unde minima iste harum, reprehenderit culpa delectus! Esse doloribus, earum consectetur sequi nemo harum suscipit quidem ducimus quam delectus! Quae ea, accusantium doloribus at iure vel minus illum culpa!
Saepe pariatur accusantium molestiae ipsum aliquam amet magni dolor maiores, quibusdam earum ad laboriosam obcaecati dolore recusandae distinctio ducimus eveniet ut quaerat asperiores eos illo optio omnis nesciunt? Fugit, veritatis.
Odit ipsa natus praesentium adipisci? Cupiditate assumenda laudantium, odit nulla repellat voluptate tenetur praesentium omnis, totam eos maiores facere. Alias quod animi dolor eum, consequatur laborum hic nisi reprehenderit architecto.
Placeat corporis praesentium impedit aut maiores sapiente, consequatur doloremque pariatur et hic repellendus asperiores sit nesciunt saepe facere laborum consequuntur quas. Corporis repudiandae suscipit dolore minus. Magnam sunt nobis tenetur!
Non excepturi reprehenderit exercitationem amet, corporis, accusantium id soluta similique perspiciatis, in voluptate itaque sint velit odit praesentium necessitatibus placeat facere ad rerum totam vitae dolorem at delectus. At, quae?
Adipisci error nihil, dolorem ratione distinctio vel odio consectetur inventore quae dicta, consequatur natus minima facilis! Aliquid suscipit adipisci non temporibus odit, enim blanditiis laudantium tempore nesciunt quas est rerum?
Numquam inventore fugit provident est quas modi incidunt, aut, officia expedita deleniti in repellendus repellat perferendis harum et sint voluptas, quibusdam corrupti ipsa pariatur soluta? Possimus veniam necessitatibus cumque eius!
Eum a esse delectus, sit odio enim culpa! Aperiam atque tempora, quibusdam ea blanditiis sunt autem. Culpa nam alias corrupti amet numquam! Sint quisquam atque officiis et magni libero ad.
Ut eaque tenetur animi ea cumque architecto minima commodi nisi dolores sapiente. In quia hic voluptates sint porro inventore mollitia itaque nemo placeat necessitatibus! Repudiandae provident doloremque nesciunt sed! Culpa?
Adipisci ipsam quae odit impedit vitae, nemo facere magnam voluptates! Praesentium laborum optio, quasi libero amet cum voluptates quod a dolores maiores nesciunt perspiciatis facilis voluptate accusantium mollitia ut autem.

## link

{{< link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "https://lruihao.cn/images/avatar.jpg" >}}
{{< link "https://lruihao.cn" "Lruihao Blog" "Lruihao Blog" true "fa-solid fa-blog" >}}

## images

![Hugo Theme FixIt](/images/apple-devices-preview.webp)
![Hugo Theme FixIt](/images/apple-devices-preview.webp "A Clean, Elegant but Advanced Hugo Theme")
![](/images/apple-devices-preview.webp "A Clean, Elegant but Advanced Hugo Theme")

get remote images test:

![Lruihao](https://lruihao.cn/images/avatar.jpg?from=FixIt)
![logo](https://lruihao.cn/logo.webp)

{{< image src="/images/lighthouse.jpg" caption="Lighthouse (`image`)" >}}

`svg` 和 `avif` 等格式以及请求式图片（如 gravatar）

{{< image src="https://fixit.lruihao.cn/images/fixit.min.svg" height="64px" width="64px" linked=false >}}
![gravatar](https://gravatar.loli.net/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0?s=32&d=mp)

<img src="https://gravatar.loli.net/avatar/fee47a2f4f2cc71f99a02b0a73ecfee0?s=32&d=mp">

base64 图片测试

![base64 img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAY1BMVEUAAADJF37JF37JF37HGIDJF37JGH7JF3/JF37JF37/QIjyNobkLIP1OIb/XJn/////c1nQHH//7PPNGn//uaz/loP/qJfz+PO01Lb/n401jDyBt4WOvpH4O4fdJ4LhKYPoLoS16W5KAAAACXRSTlMAv2DvEN8gQI+78hMBAAAAAWJLR0QPGLoA2QAAAAd0SU1FB+gEAxAhATZIvGQAAADvSURBVDjLhZPXFoMgDIa1G9oSSx21+/2fsmaAAmL/C4+QL+OEpCgCKaXKIi/FWmXMJRr1Eb9Zd406zSJ4edYiPKwD80bcDQwygqTRASoSQIQMvxetrZgJsVpfPbFl97qaqJYgEmA4WLQ3QGqRsESMAHByEf6HgC+v6wBujgiBHm/vJMoSAIbjCyFJzAQAKcDFkBwpwMQDcsCTiWcOcLFnUkiR4ExJkRiipRBC9DN9qKhDHfg3TVs97XTcan6slu1N8lh/nluIeGBe4UgtjhwT73howxXzW+HGPtmMnUc+ud0iP/3Nrt64vPvl/T6ENz+R2iTlyKdrBQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wNC0wM1QxNjozMzowMSswMDowMHnVpP8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDQtMDNUMTY6MzM6MDErMDA6MDAIiBxDAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC)

## custom attribute

Enable custom attribute support for titles and blocks by adding attribute lists inside single curly brackets (`{.myclass class="class1 class2" }`) and placing it after the Markdown element it decorates, on the same line for titles and on a new line directly below for blocks.

hello world
{.text-center}

> foo\
> bar
{.text-danger title="这是红色字体"}

- Fruit
  - Apple
  - Orange
  - Banana
  {.text-success}
- Dairy
  - Milk
  - Cheese
  {.text-warning}
{.text-primary}

```go {.myclass linenos=table,hl_lines=[8,"15-17"],linenostart=199}
// ... code
```
