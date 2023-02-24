---
title: 'Highlight Test'
date: 2022-02-27T18:45:22+08:00
description: 'Test for code highlight feature'
type: 'posts'

tags:
  - Tests
  - Content
  - highlight
categories:
  - Tests

hiddenFromHomePage: true

menu:
  main:
    title: 'Test for code highlight feature'
    parent: 'tests'
    params:
      icon: 'fa-solid fa-vial text-success'
---

> [List of Chroma Highlighting Languages](https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages)

`inline code`

```markdown
1. first
2. second

> bq

**blod** *italic*

---
+++
***
```

```java
/**
 * @author John Smith <john.smith@example.com>
 */
package l2f.gameserver.model;

public abstract strictfp class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}

```

```go
package main

import "fmt"

func main() {
    ch := make(chan float64)
    ch <- 1.0e10    // magic number
    x, ok := <- ch
    defer fmt.Println(`exitting now\`)
    go println(len("hello world!"))
    return
}
```

```scss
pre {
  margin: 0;
  padding: .25rem 0 .25rem .5rem;
  overflow: auto;
  @include tab-size(4);

  background: $code-background-color;

  [data-theme='dark'] & {
    background: $code-background-color-dark;
  }

  code {
    padding: 0;
  }

  img {
    min-height: 1em;
    max-height: 1.2em;
    vertical-align: text-bottom;
  }
}
```

```diff
- theme = "LoveIt"
+ theme = "FixIt"
! enhancements and fixes
```

```javascript
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
```

```html
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
```

```yaml
# - nickname: 标题
#   avatar: 头像
#   url: 站点
#   description: 描述
- nickname: Lruihao
  avatar: https://gravatar.loli.net/avatar/3f985efb5907ca52944a3cd7edd51606?d=wavatar&v=1.3.10
  url: https://lruihao.cn
  description: 不怕萬人阻擋，只怕自己投降
```

```html
<p>Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. Et legere ocurreret pri, animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. Labore officiis his ex, soluta officiis concludaturque ei qui, vide sensibus vim ad.</p>
```

    <p>Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. Et legere ocurreret pri, animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. Labore officiis his ex, soluta officiis concludaturque ei qui, vide sensibus vim ad.</p>

Highlighting in code fences is enabled by default.

```js {linenos=table,linenostart=287,hl_lines=[11,"6-9"]}
/**
 * 把字符串的文件後綴轉成數組
 * @param {String} str 待轉化字符串
 * @returns {Array|null} 轉化后的數組
 */
var _str2Array = (str) => {
  if (typeof (str) !== String && !Array.isArray(str)) {
    return null;
  }
  if (!Array.isArray(str)) {
    return str.split(',');
  }
};
```

Highlighting in shortcode highlight.

{{< highlight javascript "linenos=table,hl_lines=11 6-9,linenostart=287" >}}
/**
 * 把字符串的文件後綴轉成數組
 * @param {String} str 待轉化字符串
 * @returns {Array|null} 轉化后的數組
 */
var _str2Array = (str) => {
  if (typeof (str) !== String && !Array.isArray(str)) {
    return null;
  }
  if (!Array.isArray(str)) {
    return str.split(',');
  }
};
{{< /highlight >}}

```text
hello world
```

```asm
.text

.global connect
connect:
    mov     r3, #2              ; s->sin_family = AF_INET
    strh    r3, [sp]
    ldr     r3, =server_port    ; s->sin_port = server_port
    ldr     r3, [r3]
    strh    r3, [sp, #2]
    ldr     r3, =server_addr    ; s->sin_addr = server_addr
    ldr     r3, [r3]
    str     r3, [sp, #4]
    mov     r3, #0              ; bzero(&s->sin_zero)
    str     r3, [sp, #8]
    str     r3, [sp, #12]
    mov     r1, sp      ; const struct sockaddr *addr = sp

    ldr     r7, =connect_call
    ldr     r7, [r7]
    swi     #0

    add     sp, sp, #16
    pop     {r0}        ; pop sockfd

    pop     {r7}
    pop     {fp, ip, lr}
    mov     sp, ip
    bx      lr

.data
socket_call:   .long 281
connect_call:  .long 283

/* all addresses are network byte-order (big-endian) */
server_addr:            .long 0x0100007f ; localhost
server_port:            .hword 0x0b1a
```

```c#
using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Span<int> numbers = stackalloc int[length];
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}
```

```vb.net
Imports System
Imports System.IO
#Const DEBUG = True

Namespace Highlighter.Test
  ''' <summary>This is an example class.</summary>
  Public Class Program
    Protected Shared hello As Integer = 3
    Private Const ABC As Boolean = False

#Region "Code"
    ' Cheers!
    <STAThread()> _
    Public Shared Sub Main(ByVal args() As String, ParamArray arr As Object) Handles Form1.Click
      On Error Resume Next
      If ABC Then
        While ABC : Console.WriteLine() : End While
        For i As Long = 0 To 1000 Step 123
          Try
            System.Windows.Forms.MessageBox.Show(CInt("1").ToString())
          Catch ex As Exception       ' What are you doing? Well...
            Dim exp = CType(ex, IOException)
            REM ORZ
            Return
          End Try
        Next
      Else
        Dim l As New System.Collections.List<String>()
        SyncLock l
          If TypeOf l Is Decimal And l IsNot Nothing Then
            RemoveHandler button1.Paint, delegate
          End If
          Dim d = New System.Threading.Thread(AddressOf ThreadProc)
          Dim a = New Action(Sub(x, y) x + y)
          Static u = From x As String In l Select x.Substring(2, 4) Where x.Length > 0
        End SyncLock
        Do : Laugh() : Loop Until hello = 4
      End If
    End Sub
#End Region
  End Class
End Namespace
```

{{< gist spf13 7896402 >}}
