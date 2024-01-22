using AutoMapper;
using DtoLayer.Dtos;
using Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UILayer.Models;
using UILayer.Services.Interfaces;

namespace UILayer.Services.Implements
{
    public class UserService : IUserService
    {
        public bool Create(UserDto user)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var entity = Mapper.Map<User>(user);
                muhasebeWebEntities.User.Add(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<UserDto> GetAll()
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var data = muhasebeWebEntities.User.ToList();
            return Mapper.Map<List<UserDto>>(data);
        }

        public UserDto GetById(int id)
        {
            throw new NotImplementedException();
        }

        public UserDto Login(string username, string password)
        {
            
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var user = muhasebeWebEntities.User.FirstOrDefault(x=>x.UserName == username && x.Password == password);
            if (user != null)
            {
                return Mapper.Map<UserDto>(user);
            }
            return null;
        }

        public bool Update(UserDto user)
        {
            throw new NotImplementedException();
        }
    }
}
