/**
 * 
 */
package com.fpt.petstore.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fpt.petstore.entities.Partner;
import com.fpt.petstore.repository.PartnerRepository;
import com.fpt.petstore.util.DateUtil;

/**
 * @author linuss
 */
@Component
public class PartnerLogic {

  @Autowired
  PartnerRepository repo;

  public Partner savePartner(Partner partner) {
    Partner _user = generateCode(partner);
    return repo.save(_user);
  }

  public Partner getPartnerByCode(String code) {
    return repo.getByCode(code);
  }
  
  public List<Partner> findAllPartners() {
    return repo.findAll();
  }
  
  public boolean deletePartner(Partner partner) {
    repo.delete(partner);
    return true;
  }
  
  public boolean deletePartners(List<Partner> partners) {
    for(Partner sel : partners) {
      deletePartner(sel);
    }
    return true;
  }
  
  public Partner generateCode(Partner partner) {
    if(partner == null) return null;
    partner.setCode("user-" + partner.getEmail() + DateUtil.asCompactDateTimeId(new Date()));
    return partner;
  }

}
