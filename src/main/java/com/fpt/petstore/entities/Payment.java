/**
 * 
 */
package com.fpt.petstore.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fpt.petstore.util.DateUtil;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author linuss
 */

@Entity
@Table(name="order_transaction")
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Payment extends AbstractPersistable<Long> {
  
  static public enum TransactionType { Cash, Wire, CreditCard, CustomerCredit }
  
  @NotNull
  private String bankAccountId;
  
  private TransactionType transactionType = TransactionType.Cash;
  
  @NotNull
  @DecimalMin(value = "0")
  private double amount; // so tien ( co the thanh toan nhieu lan hoac nhieu kieu )
  
  private String currency = "VND";
  
  @JsonFormat(pattern = DateUtil.COMPACT_DATETIME_FORMAT)
  private Date  transactionDate = new Date();
  
  @Getter @Setter
  @Column(length = 65536)
  private String          note;
  
  public Payment(String bankAccount) {
    this.bankAccountId = bankAccount;
  }

}
