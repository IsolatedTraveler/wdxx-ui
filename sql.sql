Select t.Id, t.Zxzt, t.Zyid, t.Xmid, a.Mc As Xmmc, a.Dw As Xmdw, a.Pym,
       Decode(t.Zxzt, '-1', '未执行', '0', '未执行', '1', '已执行', '2', '部分执行') As Zxztmc,
       t.Zxzt, Decode(t.Zxzt, '-1', '0', '0', '0', '1', '2', '2', '1') As Zxsx,
       Jl.No, Dts(Jl.Fssj) As Fssj, Ksmc(#{jgid}, t.Zxksid) As Zxksmc, t.Zxksid,
       t.Kdbmid, Ksmc(#{jgid}, t.Kdbmid) As Kdksmc, t.Fs, t.Sl, t.Ktsl, a.Csxm,
       Zyxzbs(#{zyid}, Jl.Fssj) As Zyxzbs,
       Case
         When a.Csxm = '1' Then
          (Select Sum((b.sl/nvl(t.sl,1))*b.Dj)
             From i_Fymx b
            Where b.Jlid = t.Jlid
              And b.Zxh = t.Xh)
         Else
          t.Dj
       End As Xmdj,
       Case
         When a.Csxm = '1' Then
          (Select Sum(b.Ysje)
             From i_Fymx b
            Where b.Jlid = t.Jlid
              And b.Zxh = t.Xh)
         Else
          t.Ysje
       End As Ysje,
       Case
         When a.Csxm = '1' Then
          (Select Sum(b.Ssje)
             From i_Fymx b
            Where b.Jlid = t.Jlid
              And b.Zxh = t.Xh)
         Else
          t.Ssje
       End As Ssje,
       nvl(xz.sl,0) As Xzsl, 0 As Xzje,
       case when xz.tydh is not null then 'bkbj' else '' end  As Jgsfkbj
  From i_Fymx t, i_Fyjl Jl, p_Sfxmml a,i_Fyxz xz
 Where t.Jlid = Jl.Id
   And t.Xmid = a.Id
   And t.Jgid = #{jgid}
   And t.Zyid = #{zyid}
   And Arr(t.Sflb, 1) <> '03'
   And t.Ktsl > 0
   And t.id=xz.fyid(+)
   And xz.zt(+)=0
   And t.jsid is null
   And t.lb=1
  <if if(StringUtils.isNotBlank(#{xmid}))>
   and t.xmid = #{xmid}
 </if>
 <if if("1".equals(#{zxzt}))>
     and t.zxzt in ('2','1')
  </if>
  <if if("2".equals(#{zxzt}))>
     and t.zxzt in ('-1','0')
  </if>
 and t.ktsl > 0
 Order By Decode(t.Zxzt, '-1', '0', '0', '0', '1', '2', '2', '1') Asc,
          Jl.Fssj Desc
                                       
